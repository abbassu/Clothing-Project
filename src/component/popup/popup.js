import React from "react";
import { useContext } from "react";
import "./popup.scss"
import { PopupContext } from "../contexte/popup";
import { useNavigate } from "react-router-dom";
import Button from "../button/button";

function Popup(){

    const navigate=useNavigate()
    const {close,changeState,changeStateFalse}=useContext(PopupContext)

    const change=()=>{
        changeState()
    }
    const goToLogin=()=>{
        navigate("/auth")
    }
    return(
        <div className="popup-box">
            <div className="box">
                <button className="btn-close" onClick={change}>✕</button>
                <div className="warning">
                    Welcome
                    Unfortunately, you cannot complete
                    the purchase if you are not logged in.
                    If you want to log in, click the next button
                </div>
                <div className="twoButton">
                    <Button buttonType={"google"} onClick={goToLogin}>Login</Button>
                </div>

            </div>
        </div>
    )

}export default Popup