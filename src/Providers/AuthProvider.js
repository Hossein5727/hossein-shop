import React, { useState, createContext, useContext, useEffect } from 'react'

export const AuthContext = createContext()
export const AuthContextDispatcher = createContext()

function AuthProvider({ children }) {

    const [state, setState] = useState(false)

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("authState")) || false
        setState(userData)
    }, [])

    return (
        <AuthContext.Provider value={state}>
            <AuthContextDispatcher.Provider value={setState}>
                {children}
            </AuthContextDispatcher.Provider>
        </AuthContext.Provider>
    )
}

export default AuthProvider


export const UseAuth = () => useContext(AuthContext)
export const UseAuthActions = () => useContext(AuthContextDispatcher)