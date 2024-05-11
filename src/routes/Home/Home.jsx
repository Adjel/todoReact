import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { TodoContext } from "../../providers/TodoProvider/TodoProvider";
import { UserContext } from "../../providers/UserProvider/UserProvider";

export default function Home() {
  const { todos, handleTodoInput, } = useContext(TodoContext);
  const {isAuth, handleAuthentication, profile, LogOut} = useContext(UserContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // We need to reset inputs only if user is connected
  useEffect(() => {
    if (isAuth) {
      setEmail("")
      setPassword("")
    }
  }, [isAuth])

  const [title, setTitle] = useState("")
  return <Wrapper>
    <div>{profile}</div>
    <HeaderWrapper>
    <Form>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" required value={email} onChange={(event) => setEmail(event.target.value)}></input>
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" required value={password} onChange={(event) => setPassword(event.target.value)}></input>
      { !isAuth ? <AuthButton type="submit" onClick={(event) => login(event, email, password)} >"SE CONNECTER"</AuthButton> : undefined }
    </Form>
      { isAuth ? <AuthButton onClick={signOut} >"SE DECONNECTER"</AuthButton> : undefined }
      <a href="/signin">No account ? Sign In</a>
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

  function login(event, email, password) {
    event.preventDefault()
    handleAuthentication(email, password)

  }   

  function signOut() {
    LogOut()
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

