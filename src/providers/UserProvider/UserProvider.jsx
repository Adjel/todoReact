import React, { createContext, useState } from "react";
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "../../Firebase";


export const UserContext = createContext()

export default function UserProvider({children}) {
    const [user, setUser] = useState("")
    const [isAuth, setIsAuth] = useState(false)

    const handleAuthentication = async (email, password, notify) => {
        let toastError = ""
            await signInWithEmailAndPassword(auth, email, password) 
            .then((userCredential) => {
                const user = userCredential.user;
                setIsAuth(true)
                setUser(user)
                console.log("AUTH TRUE")
            })
            .catch((error) => {
                //if (error.code === "auth/invalid-email")  notify("invalid email or password")
                    let message = error.code
                    switch(error.code) {
                        case "auth/invalid-email":
                            message = "you have to submit an email and a password"
                        break;
                        case "auth/invalid-credential":
                            message = "invalid email or password"
                        break;
                    }
                    return notify(message)
            })
        return toastError
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

    const SignIn = async ({email, password}, notify) => {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        setIsAuth(true)
        setUser(user)
        // ...
        })
        .catch((error) => {
            let message = error.code
            console.log(message)
            switch(error.code) {
                case "auth/invalid-email":
                    message = "you have to submit an email and a password"
                break;
                case "auth/missing-password":
                    message = "you have to submit an email and a password"
                break;
                case "auth/missing-email":
                    message = "you have to submit an email and a password"
                break;
                case "auth/invalid-credential":
                    message = "invalid email or password"
                break;
                case "auth/email-already-in-use":
                    message = "this account already exist, you can click on under to log in"
                break;
            }
            return notify(message)
        });
    }

    return( <UserContext.Provider value={{user, isAuth, handleAuthentication, LogOut, SignIn}}>{children}</UserContext.Provider>)
}