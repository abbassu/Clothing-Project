import { useContext,createContext, useState, useEffect} from "react";


export const CartContext=createContext({
    
})
//////////////////////////////////////////////////////////////////////////////////////////////////////
const addCartItem=(cartItems,productToAdd)=>{
    //find if cartitems contains product items
    const existingCartItem= cartItems.find((item)=>item.id===productToAdd.id)
    // if found increment quantity 
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
//////////////////////////////////////////////////////////////////////////////////////////////////////

const removeCartItem=(cartItems,cartItemToRemove)=>{
  //find hte cart item to remove
  const existingCartItem= cartItems.find((item)=>item.id===cartItemToRemove.id)
  //check if quantity is equal to 1 if it is remove that tem from cart
      if(existingCartItem.quantity===1){
        const removeCartItem=(cartItems,cartItemToRemove)=>{
          return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
        }
    }

  return cartItems.map((cartItem)=>cartItem.id===cartItemToRemove.id? {...cartItem, quantity:cartItem.quantity-1}:cartItem)

}

//////////////////////////////////////////////////////////////////////////////////////////////////////
const clearCartItem=(cartItems,cartItemToClear)=>{
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
export const CartProvider=({children})=>{

    const [isOpen,setIsOpen]=useState(false)
    const [cartItems,setCartItems]=useState([])
    const [cartCount,setCartCount]=useState(0)
    const [cartTotal,setCartTotal]=useState(0)

    useEffect(()=>{
      const newCartCount = cartItems.reduce((total,item)=> total+item.quantity,0 )
      setCartCount(newCartCount)
    },[cartItems])

    useEffect(()=>{
      const newTotalCount = cartItems.reduce((total,item)=> total+item.quantity* item.price,0 )
      setCartTotal(newTotalCount)
    },[cartItems])

    const addItemToCard=(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const removeItemfromCart=(cartItemToRemove)=>{
      setCartItems(removeCartItem(cartItems,cartItemToRemove))
    }

    const clearItemfromCart=(cartItemToClear)=>{
      setCartItems(clearCartItem(cartItems,cartItemToClear))
    }

    const value={ isOpen,
                  setIsOpen,
                  addItemToCard,
                  cartItems,
                  cartCount,
                  removeItemfromCart,
                  clearItemfromCart,
                  cartTotal
    }

    return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}