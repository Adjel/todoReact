import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../providers/TodoProvider/TodoProvider";
import { UserContext } from "../providers/UserProvider/UserProvider";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"

export default function Todos() {
    const [title, setTitle] = useState("")
    const [isCompleted, setIscompleted] = useState(false)
 
    const { todos, handleTodoInput, } = useContext(TodoContext);
    const { isAuth } = useContext(UserContext)

    const navigate = useNavigate();

    useEffect(() => {
      if (!isAuth) navigate("/login")
    }, [isAuth])
  
    function handleTodo(event) {
      event.preventDefault();
      handleTodoInput(title, isCompleted)
    }

    function signOut() {
      LogOut()
    }

    function handleTitle(event) {
      event.preventDefault()
      setTitle(event.target.value)
    }
  
    function handleIscompleted(event) {
      console.log(isCompleted)
      console.log(event.target.checked)
      console.log(event.target.value)

      setIscompleted(event.target.checked)
    }
  
    return (
      <TodoWrapper>
      <div>
        {todos.map(({id, title, createdAt, isCompleted}) =>    
        (<div key={id}>{title}{isCompleted} {new Date(createdAt * 1000).toLocaleString()}</div>)
      )}
      </div>
      <Form>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" required value={title} onChange={(event) => handleTitle(event)}></input>
        <label htmlFor="isCompleted">Completed:</label>
        <input type="checkbox" name="isCompleted" id="isCompleted" checked={isCompleted} onChange={(event) => handleIscompleted(event)}/>
        <button type="submit" onClick={(event) => handleTodo(event)} >Create todo</button>
      </Form>
      { isAuth ? <button onClick={signOut} >"SE DECONNECTER"</button> : undefined }
      <a href="/Signin">No account ? Sign In</a>
      </TodoWrapper>
    )
  }
  
  const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${90/16}rem`
  
  const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center`;