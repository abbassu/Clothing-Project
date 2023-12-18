import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  createAuthUserDocumentFromAuth,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../fom-input/form-input";
import { Global } from "../contexte/usercontext";
import "./sign-up-form.scss";
import Button from "../button/button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const defaultformFields = {
  displayName: "",
  email: "",
  password: "",
  phone: "",
};

function SignUpForm() {
  const [confirmPassword, setconfirmPassword] = useState("");
  const navigate = useNavigate();
  // const {currentUser,setCurrentUser}=useContext(Global)
  // console.log("currentUser--------",currentUser)
  const [formFields, setformfields] = useState(defaultformFields);
  console.log("hit");
  function resetForm() {
    setformfields(defaultformFields);
  }

  function handleChangePass(event) {
    const rtext = event.target.value;
    setconfirmPassword(rtext);
    console.log(confirmPassword);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    console.log("event", event, ",", value);
    setformfields({ ...formFields, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password not eaqle confirmpassword");
      return;
    }
    try {
      const response = await axios.post(`http://localhost:9999/user/signup`, {
        productDetails: formFields,
      });
      console.log("Product details added:", response.data);
      //   const { user } = await createAuthUserDocumentFromAuth(email, password);
      //   // setCurrentUser(user)
      //   console.log("in sign up", user);
      //   const responts = await createUserDocumentFromAuth(user, { displayName });
      //   resetForm();
      //   navigate("/");
      //   console.log(responts);
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("email is already used");
      else {
        console.log(error);
      }
    }
  }
  console.log("formfields", formFields);
  const { displayName, email, password, phone } = formFields;
  console.log(displayName, ",", email, ",", password, ",", confirmPassword);
  return (
    <div className="sign-up-container">
      <span> Sign up with your email and password </span>
      <h2>Don't have an account ?</h2>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          labelName="Display Name"
          optionInput={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        />

        <FormInput
          labelName="Email"
          optionInput={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          labelName="Phone"
          optionInput={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "phone",
            value: phone,
          }}
        />

        <FormInput
          labelName="Password"
          optionInput={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />

        <FormInput
          labelName="Confirm Password"
          optionInput={{
            type: "password",
            required: true,
            onChange: handleChangePass,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />
        <div className="buttons-container">
          <Button buttonType="" type="submit">
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
}
export default SignUpForm;
