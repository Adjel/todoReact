import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../providers/TodoProvider/TodoProvider";
import { UserContext } from "../providers/UserProvider/UserProvider";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"

export default function Todos() {
    const [todo, setTodo] = useState({
      title: "",
      isCompleted: false 
    })
 
    const { todos, handleTodoInput, } = useContext(TodoContext);
    const { isAuth, LogOut} = useContext(UserContext)

    const navigate = useNavigate();

    useEffect(() => {
      if (!isAuth) navigate("/login")
    }, [isAuth])
  
    function handleTodo(event) {
      event.preventDefault();
      handleTodoInput(todo)
    }

    function signOut() {
      LogOut()
    }

    function createTodo(event) {
      const { name, value, checked} = event.target
      setTodo({
        ...todo,
        [name]: name !== "isCompleted" ? value : checked
      })
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
        <input type="text" name="title" id="title" required value={todo.title} onChange={(event) => createTodo(event)}></input>
        <label htmlFor="isCompleted">Completed:</label>
        <input type="checkbox" name="isCompleted" id="isCompleted" checked={todo.isCompleted} onChange={(event) => createTodo(event)}/>
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