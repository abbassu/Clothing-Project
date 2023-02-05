import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { onAuthStateChangeFirebase } from "../../utils/firebase/firebase";
import { SingOUtAuth } from "../../utils/firebase/firebase";
export const Global=createContext({
    // currentUser:null,
    // setCurrentUser :()=>null
})

export const ProviderContext=({children})=>{

    console.log("in provider ")
    SingOUtAuth()
    useEffect(()=>{
        console.log("in effect ")
        const unsubcribe = onAuthStateChangeFirebase((user)=>{
            console.log("user",user)
        })
        console.log("use effect ",unsubcribe)
    })


    const [currentUser,setCurrentUser]=useState(null)
    const dd=4444
    const val={currentUser,setCurrentUser,dd}

    return <Global.Provider value={val}> {children} </Global.Provider>
}
