import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../providers/UserProvider/UserProvider'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

export default function SignInComponent() {
    const [signInUser, setSignInUser] = useState({
        email: "",
        password: ""
    })

    const {SignIn, isAuth} = useContext(UserContext)
    // can't use navigate inside useEffect
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate('/Todos');
        }
    }, [isAuth])

    function handlOnChange(event) {
        const { name, value } = event.target
        setSignInUser({
            ...signInUser,
            [name]: value
        })
    }

    function handleOnSubmit(event) {
        event.preventDefault()
        if (signInUser.email !== "" && signInUser.password !== "") {
            (SignIn(signInUser.email, signInUser.password))
        } 
    }

    return (
        <>
            <Form>
              <label htmlFor="email">email: </label>
              <input type='email' id='email' name='email' value={signInUser.email} required onChange={(event) => handlOnChange(event)}></input>
              <label htmlFor="password">password :</label>
              <input type='password' id='password' name='password' value={signInUser.password} required onChange={(event) => handlOnChange(event)}></input>
              <button type='submit' onClick={(event) => handleOnSubmit(event)}>Sign in</button>
            </Form>
            <a href='/Login'>Already an account ? Log in</a>
        </>
    )
}

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;`
