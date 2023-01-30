import React from "react";
import { signinwithgooglepopup } from "../../../utils/firebase/firebase";
import { createUserDocumentFromAuth } from "../../../utils/firebase/firebase";
import SignUpForm from "../../sign-up-form/sign-up-form";

function SignIn(){
    const loggoogleuser= async()=>{
        console.log("lalal")
        const {user} =await signinwithgooglepopup();
        console.log("hhhhh",user)
        createUserDocumentFromAuth(user)

    }
    return(
        <div>
            Sign In        
            <button onClick={loggoogleuser}> aaaaaaa</button>
        
            <h1>s</h1>
            <SignUpForm/>
        </div>
    )
}export default SignIn