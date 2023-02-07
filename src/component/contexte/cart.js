import { useContext,createContext, useState} from "react";


export const CartContext=createContext({
    
})
const addCartItem=(cartItems,productToAdd)=>{
    //find if cartitems contains product items

    // if found increment quantity 

    // retuen new array with midified cartitems  new cart item
    
}

export const CartProvider=({children})=>{

    const [isOpen,setIsOpen]=useState("ggggg")
    const [cartItems,setCartItems]=useState([])
    const value={isOpen,setIsOpen}

    const addItemToCard=(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }


    return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}