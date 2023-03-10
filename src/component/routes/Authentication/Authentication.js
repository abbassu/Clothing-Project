import React from "react";
import SignUpForm from "../../sign-up-form/sign-up-form";
import SignInForm from "../../sign-in-form/sign-in-form";
import "./authentication.scss"
function Authentication(){
    return(
        <div className="authentication-container">
            <SignInForm/>
            <div>
                <hr />
            </div>
            <SignUpForm/>
        </div>
    )
}export default Authentication