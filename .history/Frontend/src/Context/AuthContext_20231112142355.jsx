import { createContext, useEffect, useReducer } from "react";
import { json } from "react-router-dom";

//initailize state
const initialState = {
    user: localStorage.getItem('user') !== undefined ? json.parse(localStorage.getItem('user')):null,
    role: localStorage.getItem('role') || null,
    token: localStorage.getItem('token') || null
}

//create context
export const authContext = createContext(initialState);

//create authentication reducer
const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                role: null,
                token: null
            };
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload.user,
                role: action.payload.role,
                token: action.payload.token
            };
        case 'LOGOUT':
            return {
                user: null,
                role: null,
                token: null
            };
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) => {
    //use reducer to manage the state of our app
    const [state, dispatch] = useReducer(authReducer, initialState);
    //localStorage useEffect
    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(state.user))
        localStorage.setItem('role', state.role)
        localStorage.setItem('token', state.token)
    },[state])
    //return auth context provider
    return <authContext.Provider value={{
        user:state.user,
        role:state.role,
        token:state.token,
        dispatch}}>
    {children}
    </authContext.Provider>
}