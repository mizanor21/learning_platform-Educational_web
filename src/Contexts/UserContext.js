import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const signupWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider)
    }
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const authInfo = { signupWithEmailAndPassword, signinEmailAndPassword, googleSignIn, facebookSignIn, githubSignIn, forgotPassword };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;