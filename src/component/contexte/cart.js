import { useContext,createContext, useState, useEffect} from "react";


export const CartContext=createContext({
    
})
const addCartItem=(cartItems,productToAdd)=>{
    //find if cartitems contains product items
    console.log("(cartItems,productToAdd)",cartItems ,",",productToAdd)

    const existingCartItem= cartItems.find((item)=>item.id===productToAdd.id)
    // if found increment quantity 
    console.log("find",existingCartItem)
    if (existingCartItem) {
        const editCart= cartItems.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );

        return editCart
      }
    

    // retuen new array with midified cartitems  new cart item
    return [...cartItems, {...productToAdd, quantity:1}] 
}

export const CartProvider=({children})=>{

    const [isOpen,setIsOpen]=useState(false)
    const [cartItems,setCartItems]=useState([])
    const [cartCount,setCartCount]=useState(0)

    useEffect(()=>{
      const newCartCount = cartItems.reduce((total,item)=> total+item.quantity,0 )
      setCartCount(newCartCount)
    },[cartItems])


    const addItemToCard=(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    const value={isOpen,setIsOpen,addItemToCard,cartItems,cartCount}

    return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}