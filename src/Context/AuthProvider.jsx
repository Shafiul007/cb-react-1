import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../firebase-config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loader,setLoader]=useState(true);
    const auth = getAuth(app);
    const googleProvider=new GoogleAuthProvider();

    const createUser=(email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser=(email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogin=()=>{
        setLoader(true);
        return signInWithPopup(auth,googleProvider);
    }

    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSub=onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoader(false);
              // ...
            } else {
              // User is signed out
              // ...
              setUser(null);
            }
          });
          return ()=>{
            unSub();
          }
    },[user])

    const authInfo={
        loader,
        createUser,
        loginUser,
        user,
        logOut,
        googleLogin,
        

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;