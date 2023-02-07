import React from "react";
import "./cart-dropdown.scss"
import Button from "../button/button";

function CartDropdown(){
    return(
        <div className="cart-dropdown-container">
            <div className="cart-itmes">

            </div>
            <Button buttonType="inverted">GO TO CHECKOUT</Button>
        </div>
    )
}export default CartDropdown