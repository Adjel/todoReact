import React, { useState, createContext, useEffect, useContext } from "react";
import {db, collection, addDoc, serverTimestamp, onSnapshot} from "../../Firebase"
import { UserContext } from "../UserProvider/UserProvider";

export const TodoContext = createContext();

function TodoProvider({children}) {
    const [todos, setTodos] = useState([]);

    const {isAuth, user} = useContext(UserContext);

    
    const handleTodoInput = async ({title, isCompleted}) => {

      console.log()
 
        // Add an object to the db
        const todosRef = collection(db, "users", user.uid, "todos")
        const todoRef = await addDoc(todosRef, {
          completed: isCompleted,
          title: title,
          createdAt: serverTimestamp()
        });
   
        
      console.log(`Todo created with id: ${todoRef.id}`)
  }

    // keep values updated
    useEffect(() => {

      if (isAuth) {
        try {
          const todosRef = collection(db, "users", user.uid, "todos")
          
          const unsubscribe = onSnapshot(todosRef, (querySnapshot) => {
            const allTodos = [];
            
            querySnapshot.forEach((doc) => {
              allTodos.push({
                id: doc.id,
                ...doc.data()
              });
            });
          
            setTodos(allTodos);
          });
          
          return () => {
            unsubscribe(); // when component unmounts
          };
          
        } catch (e) {
          throw new Error(`${e} impossible to get data in TodoProvider`)
        }
        
      }
        //}, [show])
      }, [isAuth]);


    // update todos
    const handleToggleComplete = async (todoId, status) => {
        const todoRef = doc(db, "users", user.uid, "todos", todoId)
      
        await updateDoc(todoRef, {
          completed: !!status // smart way of converting any type to type Boolean
        })
      }

    const handleDelete = async (todoId) => {
          const todoRef = doc(db, "users", user.uid, "todos", todoId)
          await deleteDoc(todoRef);
          
          // Remove the 'capital' field from the document
          await updateDoc(todoRef, {
          completed: deleteField()
          });
    }


    return (<TodoContext.Provider
      value ={{todos, setTodos, handleTodoInput, handleToggleComplete, handleDelete}}>{children}</TodoContext.Provider>);
        
}

export default TodoProvider;