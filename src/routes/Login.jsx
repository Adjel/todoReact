import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../providers/UserProvider/UserProvider";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const {isAuth, handleAuthentication} = useContext(UserContext)

      // can't use navigate inside useEffect
      const navigate = useNavigate();

  // We need to reset inputs only if user is connected
  useEffect(() => {
    if (isAuth) {
      navigate('/Todos');
    }
  }, [isAuth])

  const notify = (toastMessage) => toast(`${toastMessage}`, {
    autoClose: 5000,
    hideProgressBar: true,
  })

  async function login(event) {
    event.preventDefault()
    await handleAuthentication(email, password, notify)
  }  

  return (<Wrapper>

    <HeaderWrapper>
    <Form>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" required value={email} onChange={(event) => setEmail(event.target.value)}></input>
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" required value={password} onChange={(event) => setPassword(event.target.value)}></input>
      <button type="submit" onClick={(event) => login(event, email, password)} >"SE CONNECTER"</button>
    </Form>
    <a href='/signin'>Not have an account ? Sign in</a>
    </HeaderWrapper>
    <ToastContainer></ToastContainer>
  </Wrapper>); 
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: ${56/16}rem;
`;

const HeaderWrapper = styled.header`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;`

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;`

