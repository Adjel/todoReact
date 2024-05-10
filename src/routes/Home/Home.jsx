import React, { useContext, useState } from "react";
import styled from "styled-components"
import { TodoContext } from "../../providers/TodoProvider/TodoProvider";
import { UserContext } from "../../providers/UserProvider/UserProvider";

export default function Home() {
  const { todos, handleTodoInput, } = useContext(TodoContext);
  const {isAuth, handleAuthentication, profile} = useContext(UserContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [title, setTitle] = useState("")
  return <Wrapper>
    <div>{profile}</div>
    <HeaderWrapper>
    <Form>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" required value={email} onChange={(event) => setEmail(event.target.value)}></input>
      <label htmlFor="password">Password:</label>
      <input type="text" name="password" id="password" required value={password} onChange={(event) => setPassword(event.target.value)}></input>
      <AuthButton type="submit" onClick={(event) => handleAuthentication(event, email, password)} >{isAuth ? "SE DECONNECTER" : "SE CONNECTER" }</AuthButton>
    </Form>
    <AuthButton >LOG OUT</AuthButton>
    </HeaderWrapper>
    <TodoWrapper>

    <div>
      {todos.map(({id, title, createdAt, completed}) => 
        
      (<div key={id}>{title}{completed} {new Date(createdAt * 1000).toLocaleString()}</div>)
      
    )}
    </div>
    <Form>
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" id="title" required value={title} onChange={(event) => setTitle(event.target.value)}></input>
      <Button type="submit" onClick={(event) => setTodo(event, title)} >Create todo</Button>
    </Form>
    </TodoWrapper>
  </Wrapper>;

  function setTodo(event, title) {
    event.preventDefault();
    handleTodoInput(title)
  }
}


const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
gap: ${56/16}rem;
`;

const HeaderWrapper = styled.header``

const TodoWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;`

const Form = styled.form``

const Button = styled.button``

const AuthButton = styled.button``

