import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config.js'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext =createContext()
const auth =getAuth(app)

function AuthProvider({children}) {
    const [user ,setUser] = useState(null);
    const [loading , setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email ,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle =() =>{
        setLoading(true);
        return signInWithPopup(auth , googleProvider)
    }

    const login = (email ,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth ,email ,password)
    }

    const logOut = ()=>{
        return  signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,CurrentUser=>{
        setUser(CurrentUser)
        setLoading(false)
    })
    return () =>{
        return unsubscribe()
    }
    }, [])

    const authinfo ={
        user,
        createUser,
        loginWithGoogle,
        loading,
        login,
        logOut
    }


  return (
    <AuthContext.Provider value={authinfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider