import React, { useEffect, useState } from "react";
import { createContext,useContext } from "react";


export const PopupCartContext=createContext({})

export const PopupCartProvider=({children})=>{

    const [close,setClose]=useState(false)
    function changeState(state){
        setClose(!state)
    }
    useEffect(()=>{
        console.log("change cart state to ",close)
    },[close])
    const value={changeState, close}
    
    return <PopupCartContext.Provider value={value}>{children}</PopupCartContext.Provider>
}
