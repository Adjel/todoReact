import React, { createContext, useEffect, useState } from "react";
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "../../Firebase";


export const UserContext = createContext()

export default function UserProvider({children}) {
    const [profile, setProfile] = useState("")
    const [isAuth, setIsAuth] = useState(false)

    const handleAuthentication = (email, password) => {
            signInWithEmailAndPassword(auth, email, password) 
            .then((userCredential) => {
                console.log(userCredential)
                console.log({userCredential})
                setIsAuth(true);
                console.log("AUTH TRUE")
            })
            .catch((error) => {
                console.log(error)
                console.log({error})
            })
    }

    const LogOut = () => {
        signOut(auth)
        .then(() => {
        // Sign-out successful.
        console.log("logged out")
        setIsAuth(false)
        })
        .catch((error) => {
        // An error happened.
        });
    }
    return( <UserContext.Provider value={{profile, isAuth, handleAuthentication, LogOut}}>{children}</UserContext.Provider>)
}