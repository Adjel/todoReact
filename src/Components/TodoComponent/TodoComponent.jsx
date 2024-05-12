import React, { useContext, useState } from "react";
import { TodoContext } from "../../providers/TodoProvider/TodoProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function TodoComponent({title, createdAt, completed, todoId, notify}) {
    const [isOnModifyingTitle, setIsOnModifyingTitle] = useState(false);
    const [newTitle, setNewTitle] = useState("")

    const { handleDelete, handleToggleComplete, handleToggleTitle, todos } = useContext(TodoContext)  
    
    const handleOnSubmit = (event) => {
        event.preventDefault()
        if(!handleTodoError()) {
            handleToggleTitle(todoId, newTitle)
            setIsOnModifyingTitle(!isOnModifyingTitle)
        }
    }

    const handleTitle = (event) => {
        setNewTitle(event.target.value)
    } 

    function handleTodoError() {
        if (newTitle === "" || todos.find((todo) => newTitle === todo.title)) {
          notify("The todo must have a title and not already exist")
          return true
        }
      }

    return(
        <div>
            {isOnModifyingTitle ? <form>
            <label htmlFor="newTitle">new title:</label>
            <input required type="text" name="newTitle" id="newTitle" value={newTitle} onChange={(event) => handleTitle(event)}></input>
            <button type="submit" onClick={(event) => handleOnSubmit(event)}>Modify</button>
            </form> : 
            <div>
            <div> {title}</div>
            </div>
            }
            <button onClick={() => setIsOnModifyingTitle(!isOnModifyingTitle)}>{!isOnModifyingTitle ? "Modify title" : "Cancel"}</button>
             {new Date(createdAt * 1000).toLocaleString()}
            <label htmlFor="isComplete">complete</label>
            <input type="checkbox" name="isComplete" checked={completed} onChange={() => handleToggleComplete(todoId, completed)}></input>
            <button onClick={() => handleDelete(todoId)}>Delete</button>
            <ToastContainer/>
        </div>
    )
}