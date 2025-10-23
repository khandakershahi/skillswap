import app from '../Firebase/firebase.config';
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }


    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const forgetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    const logOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        signInWithGoogle,
        logIn,
        logOut,
        loading,
        setLoading,
        forgetPassword,
        updateUser,
    }
    return <AuthContext value={authData}>{children}</AuthContext>

};

export default AuthProvider;