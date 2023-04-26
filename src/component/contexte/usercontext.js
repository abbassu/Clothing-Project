import { async } from "@firebase/util";
import React, { useEffect } from "react";
import { useState ,useReducer} from "react";
import { createContext } from "react";
import { Await } from "react-router-dom";
import { onAuthStateChangeFirebase } from "../../utils/firebase/firebase";
import { SingOUtAuth } from "../../utils/firebase/firebase";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase";
export const Global=createContext({
    // currentUser:null,
    // setCurrentUser :()=>null
})

export const USER_ACTION_TYPES={
    SET_CURRENT_USER:"SET_CURRENT_USER"
}

const userReducer=(state,action)=>{
    const {type,payload}=action;
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            // console.log("yyyyyyayyyyyyy",state,"-------------",payload)
        return{
            ...state,
            currentUser:payload
        }
        default:
            throw new Error(`unhandled type ${type} in userReducer`)
    }
}

const INITIAL_STATE={
    currentUser:null
}


export const ProviderContext=({children})=>{
    const [{currentUser},dispatch]=useReducer(userReducer,INITIAL_STATE)
    const setCurrentUser=(user)=>{
        dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER,payload:user})
    }
    function before(){
        const  unsubcribe =  onAuthStateChangeFirebase(async(user)=>{
            if(user){
        createUserDocumentFromAuth(user)
            }
            await setCurrentUser(user)
            console.log("user",user)
        })
        
    }

    useEffect(()=>{
        before()

    },[])
   

    // const [currentUser,setCurrentUser]=useState(null)
    const dd=4444
    const val={currentUser,setCurrentUser,dd}



    return <Global.Provider value={val}> {children} </Global.Provider>
}
