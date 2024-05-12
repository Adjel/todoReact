import React, { createContext, useState } from "react";
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
                if(error.code === "auth/invalid-credential") {
                    console.log("email ou mot de passe invalide")
                }
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

    const SignIn = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        setIsAuth(true)
        // ...
        })
        .catch((error) => {
            console.log(error.code);
            const code = error.code
            console.log({code});
            console.log(error.message);
            const message = error.message
            console.log({message});
        // ..
        });
    }

    return( <UserContext.Provider value={{profile, isAuth, handleAuthentication, LogOut, SignIn}}>{children}</UserContext.Provider>)
}