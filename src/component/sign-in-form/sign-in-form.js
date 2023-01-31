import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import { createAuthUserDocumentFromAuth,createUserDocumentFromAuth,signinwithgooglepopup ,signinwauthithemailandpassword} from "../../utils/firebase/firebase";
import FormInput from "../fom-input/form-input";
import "./sign-in-form.scss"
import Button from "../button/button";

const defaultformFields={
    email:'',
    password:'',
}


function SignInForm(){
    const [formFields,setformfields]=useState(defaultformFields)

    function resetForm(){
        setformfields(defaultformFields)
    }


    const signinwithgoogle= async()=>{
        const {user} =await signinwithgooglepopup();
        createUserDocumentFromAuth(user)
    }

    function handleChange(event){
        const {name,value }=event.target
        setformfields({...formFields,[name]:value})
    }

    async function handleSubmit(event){
        event.preventDefault()
        try{
            const respons = await signinwauthithemailandpassword(email,password)
            console.log("rrrrr",respons)
            resetForm()
        }catch(error){
        }
    }


console.log("formfields",formFields)

    const{email,password}=formFields

    console.log(",",email,",",password,",")


    return(
        <div className="sign-up-container">
            <span> Sign in with your email and password </span>
            <h2>Don't jave an account ?</h2>
            <form action="" onSubmit={handleSubmit}>
                


                <FormInput 
                    labelName="Email" 
                    optionInput={
                        {
                            type:"email",
                            required:true,
                            onChange:handleChange,
                            name:"email",
                            value:email
                        }
                    }
                />

                <FormInput 
                    labelName="Password" 
                    optionInput={
                        {
                            type:"password",
                            required:true,
                            onChange:handleChange,
                            name:"password",
                            value:password
                        }
                    }
                />



                <div className="buttons-container">
                    <Button buttonType="" type="submit">Sign in</Button>
                    <Button buttonType="google" onClick={signinwithgoogle} type="submit">Google Sign in</Button>
                
                </div>
                
            </form>
        </div>
    )
}export default SignInForm