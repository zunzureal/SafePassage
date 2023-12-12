import React, { useEffect } from "react";
import { useState,createContext } from "react";

const UserContext = createContext()

const UserProvider = ({children})=>{

    const [state,setState] = useState({})

    useEffect(()=>{
        if(localStorage.getItem('data') !== undefined){
            setState(JSON.parse(localStorage.getItem('data')))
            console.log(JSON.parse(localStorage.getItem('data')))}

        else {
            setState({})
        }
    },[])
    return (
        <UserContext.Provider value={[state,setState]}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext,UserProvider}