import React, { createContext, useEffect, useState } from "react";
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../../Firebase";


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

    return( <UserContext.Provider value={{profile, isAuth, handleAuthentication}}>{children}</UserContext.Provider>)
}