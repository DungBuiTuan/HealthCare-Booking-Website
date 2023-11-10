import { createContext, useContext, useEffect, useReducer } from "react";

//initailize state
const initialState = {
    user: null,
    role: null,
    token: null
}

//create context
const authContext = createContext(initialState);

//create authentication reducer
const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                role: null,
                token: null
            }
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload.user,
                role: action.payload.role,
                token: action.payload.token
            }
        case 'LOGOUT':
            return {
                user: null,
                role: null,
                token: null
            }
        default:
            return state
    }
}

export const authContextProvider = ({children}) => {
    //use reducer to manage the state of our app
    const [state, dispatch] = useReducer(authReducer, initialState);
    //return auth context provider
    return <authContext.Provider value={{
        user:state.user,
        role:state.role,
        token:state.token,
        dispatch}}>
    {children}
    </authContext.Provider>
}