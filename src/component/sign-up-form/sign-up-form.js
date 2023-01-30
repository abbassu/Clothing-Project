import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import { createAuthUserDocumentFromAuth,createUserDocumentFromAuth } from "../../utils/firebase/firebase";

const defaultformFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',

}


function SignUpForm(){
    const [formFields,setformfields]=useState(defaultformFields)

    function resetForm(){
        setformfields()
    }

    function handleChange(event){
        const {name,value }=event.target
        console.log("event",event ,",",value)
        setformfields({...formFields,[name]:value})
    }

    async function handleSubmit(event){
        event.preventDefault()
        if(password !== confirmPassword){
            alert("password not eaqle confirmpassword")
            return;
        }
        try{
            const {user} = await createAuthUserDocumentFromAuth(email,password)
            console.log("fffffffffffff",user)
            const responts= await  createUserDocumentFromAuth(user,{displayName})
            console.log(responts)
        }catch(error){
            if(error.code ==="auth/email-already-in-use")alert("email is already used")
            else{
                console.log(error)
            }
        }
    }


console.log("formfields",formFields)

    const{displayName,email,password,confirmPassword}=formFields

    console.log(displayName,",",email,",",password,",",confirmPassword)


    return(
        <div>
            <h1> Sign up with your email and password </h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Display Name</label>
                <input type="text" required  onChange={handleChange} name="displayName" value={displayName}/>

                <label htmlFor="">Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email}/>

                <label htmlFor="">Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password }/>

                <label htmlFor="">Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}export default SignUpForm