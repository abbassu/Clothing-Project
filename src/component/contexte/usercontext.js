import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const Global=createContext({
    // currentUser:null,
    // setCurrentUser :()=>null
})

export const ProviderContext=({children})=>{

    const [currentUser,setCurrentUser]=useState(null)
    const dd=4444
    const val={currentUser,setCurrentUser,dd}

    return <Global.Provider value={val}> {children} </Global.Provider>
}
