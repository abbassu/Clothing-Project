import React from "react";
import SignUpForm from "../../sign-up-form/sign-up-form";
import SignInForm from "../../sign-in-form/sign-in-form";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./authentication.scss"
function Authentication(){
    
    const { pathname } = useLocation();
    useEffect(()=>{
            window.scrollTo(0, 0);
    },[pathname])
    
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