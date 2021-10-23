import React, { useEffect } from 'react';
import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, updateProfile,
    signOut, onAuthStateChanged,
} from "firebase/auth";
import { useState } from 'react';
import initializeAuthentication from '../firebase/firebase.initialize';

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')
    const [userName, setUserName] = useState('')

    const auth = getAuth();


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {

            }
        })
    }, [])


    const handleEmailPassRegistration = e => {
        return createUserWithEmailAndPassword(auth, userEmail, userPass)

    }

    const updateUserProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: userName,
        })
            .then(() => {

            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleEmailPassLogIn = () => {
        return signInWithEmailAndPassword(auth, userEmail, userPass)
    }

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return {
        user, error,
        setUser,
        setUserEmail,
        setUserPass,
        setError,
        updateUserProfile,
        setUserName,
        handleEmailPassRegistration,
        handleEmailPassLogIn,
        handleLogOut,
    }
};

export default useFirebase;