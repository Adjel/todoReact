import React, { useState, useContext } from "react";
import { TodoContext } from "../providers/TodoProvider/TodoProvider";
import styled from "styled-components"

export default function Todos() {
    const [title, setTitle] = useState("")

    const { todos, handleTodoInput, } = useContext(TodoContext);
  
    function setTodo(event, title) {
      event.preventDefault();
      handleTodoInput(title)
    }
  
    return (
      <TodoWrapper>
      <div>
        {todos.map(({id, title, createdAt, completed}) =>    
        (<div key={id}>{title}{completed} {new Date(createdAt * 1000).toLocaleString()}</div>)
      )}
      </div>
      <Form>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" required value={title} onChange={(event) => setTitle(event.target.value)}></input>
        <button type="submit" onClick={(event) => setTodo(event, title)} >Create todo</button>
      </Form>
      </TodoWrapper>
    )
  }
  
  const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;`
  
  const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center`;