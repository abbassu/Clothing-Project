import React from "react";
import { signinwithgooglepopup } from "../../../utils/firebase/firebase";
import { createUserDocumentFromAuth } from "../../../utils/firebase/firebase";
import SignUpForm from "../../sign-up-form/sign-up-form";
import SignInForm from "../../sign-in-form/sign-in-form";
function Authentication(){

    return(
        <div>
            {/* <button onClick={loggoogleuser}> aaaaaaa</button> */}
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}export default Authentication