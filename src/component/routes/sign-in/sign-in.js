import React from "react";
import { signinwithgooglepopup } from "../../../utils/firebase/firebase";
import { createUserDocumentFromAuth } from "../../../utils/firebase/firebase";


function SignIn(){
    const loggoogleuser= async()=>{
        console.log("lalal")
        const {user} =await signinwithgooglepopup();
        console.log("hhhhh")
        createUserDocumentFromAuth(user)

    }
    return(
        <div>
            Sign In        
            <button onClick={loggoogleuser}> aaaaaaa</button>
        </div>
    )
}export default SignIn