import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (name, imageURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imageURL
        })
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('current user: ', currentUser);
            setLoading(false);
        })

        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo ={
        createUser,
        updateUserProfile,
        signIn,
        logOut,
        user,
        loading,
    }

    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.node,
}
export default AuthProvider;