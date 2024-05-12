import React, { useState } from "react";
import styled from "styled-components";
import { UserContext } from "../providers/UserProvider/UserProvider";

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const {isAuth, handleAuthentication, profile, LogOut} = useContext(UserContext)

  // We need to reset inputs only if user is connected
  useEffect(() => {
    if (isAuth) {
      setEmail("")
      setPassword("")
    }
  }, [isAuth])

  return (<Wrapper>
    <div>{profile}</div>
    <HeaderWrapper>
    <Form>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" required value={email} onChange={(event) => setEmail(event.target.value)}></input>
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" required value={password} onChange={(event) => setPassword(event.target.value)}></input>
      { !isAuth ? <button type="submit" onClick={(event) => login(event, email, password)} >"SE CONNECTER"</button> : undefined }
    </Form>
      { isAuth ? <button onClick={signOut} >"SE DECONNECTER"</button> : undefined }
      <a href="/signin">No account ? Sign In</a>
    </HeaderWrapper>
  </Wrapper>);

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

