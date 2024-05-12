import React, { useContext } from "react";
import styled from "styled-components"
import { TodoContext } from "../../providers/TodoProvider/TodoProvider";


export default function TodoComponent({title, createdAt, completed, todoId}) {
    const { handleDelete } = useContext(TodoContext)    

    return(
        <div>
            {title} {new Date(createdAt * 1000).toLocaleString()}
            <label htmlFor="isComplete">complete</label>
            <input type="checkbox" name="isComplete" checked={completed} ></input>
            <button onClick={() => handleDelete(todoId)}>Delete</button>
        </div>
    )
}