import React, { useEffect, useState } from "react";
import { createContext,useContext } from "react";


export const PopupContext=createContext({})

export const PopupProvider=({children})=>{

    const [close,setClose]=useState(true)
    function changeState(){
        setClose(true)
    }
    function changeStateFalse(){
        setClose(false)
    }
    useEffect(()=>{
        console.log("change state to ",close)
    },[close])
    const value={changeState, close,changeStateFalse}
    
    return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
}
