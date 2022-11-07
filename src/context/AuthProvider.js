import React from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return ()=> unsubscribe();
    }, [])
    const authInfo = {
        user,
        loading
    };
    return <AuthContext.Provider value={authInfo} >{children}</AuthContext.Provider>
};

export default AuthProvider;