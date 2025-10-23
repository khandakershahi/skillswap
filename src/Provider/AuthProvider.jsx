import app from '../Firebase/firebase.config';
import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)




const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const authData = {
        createUser,
        logIn,
        forgetPassword,
    }
    return <AuthContext value={authData}>{children}</AuthContext>

};

export default AuthProvider;