import React, { createContext, useEffect, useState } from "react";
import { auth, signInWithEmailAndPassword } from "../../Firebase";


export const UserContext = createContext()

export default function UserProvider({children}) {
    const [profile, setProfile] = useState("")
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        console.log({profile})
        console.log({isAuth})
    }, [isAuth, profile])

   
    const handleAuthentication = async ({email, password}) => {
        try {

            const result = await signInWithEmailAndPassword(auth, email, password) 
            console.log(result)
            const user = result.user;

            setIsAuth(true);
            console.log({user}) 
            setProfile(user.providerData[0]);
                
        } catch(err) {
            console.log(`${err}: can't sign in`) 
            console.log({err}) 
        }
    }
   


    return( <UserContext.Provider value={{profile, isAuth, handleAuthentication}}>{children}</UserContext.Provider>)
}