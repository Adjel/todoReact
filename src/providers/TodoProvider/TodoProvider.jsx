import React, { useState, createContext, useEffect } from "react";
import {db, collection, addDoc, serverTimestamp, onSnapshot} from "../../Firebase"


export const TodoContext = createContext();

function TodoProvider({children}) {
    // const {userId} = useContext(userContext);
    const [todos, setTodos] = useState([]);

    const handleTodoInput = async (value) => {
      // Add an object to the db
      const todosRef = collection(db, "todos")
      const todoRef = await addDoc(todosRef, {
          completed: false,
          title: value,
          createdAt: serverTimestamp()
      });


      setTodos(value); // updates state

      console.log(`Todo created with id: ${todoRef.id}`)
  }

    // keep values updated
    useEffect(() => {
      try {
       
          const todosRef = collection(db, "todos");
          
          const unsubscribe = onSnapshot(todosRef, (querySnapshot) => {
            const allTodos = [];
            
            querySnapshot.forEach((doc) => {
              allTodos.push({
                id: doc.id,
                ...doc.data()
              });
            });
            
            console.log(allTodos[0].title)
            console.log(allTodos.map((todo) => {
              todo
            }))

            setTodos(allTodos);
          });
          
          return () => {
            unsubscribe(); // when component unmounts
          };
     
      } catch (e) {
        throw new Error(`${e} impossible to get data in TodoProvider`)
      }
      
      //}, [show])
      }, []);


    // update todos
    const handleToggleComplete = async (todoId, status) => {
        const todoRef = doc(db, "users", userId, "todos", todoId)
      
        await updateDoc(todoRef, {
          completed: !!status // smart way of converting any type to type Boolean
        })
      }

      
    const handleDelete = async (todoId) => {
          const todoRef = doc(db, "users", userId, "todos", todoId)
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