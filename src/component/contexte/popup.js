import React, { useEffect, useState } from "react";
import { createContext,useContext } from "react";


export const PopupContext=createContext({})

export const PopupProvider=({children})=>{

    const [close,setClose]=useState(false)
    function changeState(state){
        setClose(!state)
    }
    useEffect(()=>{
        console.log("change state to ",close)
    },[close])
    const value={changeState, close}
    
    return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
}
