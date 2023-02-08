import React from "react";
import "./cart-dropdown.scss"
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { useContext } from "react";
import { CartContext } from "../contexte/cart";
function CartDropdown(){
    const {cartItems}= useContext(CartContext)

    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item)=>{
                    return(
                        <CartItem cartitem={item} />
                        
                    )
                })}
            </div>

            <Button buttonType="inverted">GO TO CHECKOUT</Button>
        </div>
    )
}export default CartDropdown