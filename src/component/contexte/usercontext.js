import { async } from "@firebase/util";
import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { Await } from "react-router-dom";
import { onAuthStateChangeFirebase } from "../../utils/firebase/firebase";
import { SingOUtAuth } from "../../utils/firebase/firebase";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase";
export const Global=createContext({
    // currentUser:null,
    // setCurrentUser :()=>null
})

export const ProviderContext=({children})=>{

    console.log("in provider ")
    // SingOUtAuth()

    function before(){
        console.log("in before")
        const  unsubcribe =  onAuthStateChangeFirebase(async(user)=>{

            if(user){
        createUserDocumentFromAuth(user)
            }

            await setCurrentUser(user)
            console.log("user",user)
        })
        
    }

    useEffect(()=>{
        console.log("in effect ")


    },[])


    const [currentUser,setCurrentUser]=useState(null)
    const dd=4444
    const val={currentUser,setCurrentUser,dd}
    before()


    return <Global.Provider value={val}> {children} </Global.Provider>
}
