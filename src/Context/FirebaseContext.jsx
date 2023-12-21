import { createContext, useEffect, useState } from "react"

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from "../Firebase/firebase.config";



export const AuthContext = createContext(null);
const FirebaseAuth = getAuth(app);


const FirebaseContext = ({ children }) => {

    const [user,setUser]=useState();
    const [loader,setLoader]=useState(true);


    const FirebaseLoginUser=(email,pass)=>{
        setLoader(true);
        return signInWithEmailAndPassword(FirebaseAuth,email,pass);
    }
    
    const FirebaseSignupUser=(email,pass)=>{
        setLoader(true);
        console.log(email);
        console.log(pass);
        return createUserWithEmailAndPassword(FirebaseAuth,email,pass);
    }

    const FirebaseLogoutUser=()=>{
        setLoader(true);
        return signOut(FirebaseAuth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(FirebaseAuth, (currentUser)=>{
            setLoader(false);
            setUser(currentUser);
        })
        return ()=>{
            return unSubscribe()
        }
    })

    const FirebaseUpdateUser=(val,name,photo)=>{
        setLoader(true);
        return updateProfile(val,{
            displayName:name,
            photoURL:photo
        })
    }

    const authInfo = {
        user,
        loader,
        FirebaseLoginUser,
        FirebaseLogoutUser,
        FirebaseSignupUser,
        FirebaseUpdateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default FirebaseContext