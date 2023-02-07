import React from "react";
import "./cart-dropdown.scss"
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";

function CartDropdown(){
    return(
        <div className="cart-dropdown-container">
            <div className="cart-itmes">
                {[].map((item)=>{
                    return(
                        <CartItem cartitem={item}/>
                        
                    )
                })}
            </div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <Button buttonType="inverted">GO TO CHECKOUT</Button>
        </div>
    )
}export default CartDropdown