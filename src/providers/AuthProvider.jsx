import { createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('Current User: ', currentUser)
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    // const removeUser = (user)=>{
    //     return deleteUser(user)
    // } 

    const logOut = () => {
        return signOut(auth)
    }

    // delete (auth.currentUser)

    const userInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        logOut,
        
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;