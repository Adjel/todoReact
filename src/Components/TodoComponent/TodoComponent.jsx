import React, { useContext, useState } from "react";
import { TodoContext } from "../../providers/TodoProvider/TodoProvider";


export default function TodoComponent({title, createdAt, completed, todoId}) {
    const [isOnModifyingTitle, setIsOnModifyingTitle] = useState(false);
    const [newTitle, setNewTitle] = useState("")

    const { handleDelete, handleToggleComplete, handleToggleTitle } = useContext(TodoContext)  
    
    const handleOnSubmit = (event) => {
        event.preventDefault()
        handleToggleTitle(todoId, newTitle)
        setIsOnModifyingTitle(!isOnModifyingTitle)
    }

    const handleTitle = (event) => {
        setNewTitle(event.target.value)
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
            <button onClick={() => setIsOnModifyingTitle(!isOnModifyingTitle)}>Modify title</button>
            </div>
            }
             {new Date(createdAt * 1000).toLocaleString()}
            <label htmlFor="isComplete">complete</label>
            <input type="checkbox" name="isComplete" checked={completed} onChange={() => handleToggleComplete(todoId, completed)}></input>
            <button onClick={() => handleDelete(todoId)}>Delete</button>
        </div>
    )
}