import { useContext,createContext, useState, useEffect, useReducer} from "react";


export const CartContext=createContext({
    
})
//////////////////////////////////////////////////////////////////////////////////////////////////////
const addCartItem=(cartItems,productToAdd)=>{
  console.log("iiiiiiiiiiiiiii")
    //find if cartitems contains product items
    const existingCartItem= cartItems.find((item)=>item.id===productToAdd.id)
    // if found increment quantity 
    if (existingCartItem) {
      console.log("ttttttttttttttt")
        const editCart= cartItems.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return editCart
      }
      console.log("ccccccccccccc")

    // retuen new array with midified cartitems  new cart item
    return [...cartItems, {...productToAdd, quantity:1}] 
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

const addCartItemAllFromStorage=(allcartItems,value)=>{
  console.log("iiiiiiiiiiiiiii--addCartItemAllFromStorage")
    //find if cartitems contains product items
    // if found increment quantity 
    // retuen new array with midified cartitems  new cart item
    return [...allcartItems] 
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
const addCartItemAll=(cartItems,productToAdd,value)=>{
  console.log("iiiiiiiiiiiiiii")
    //find if cartitems contains product items
    const existingCartItem= cartItems.find((item)=>item.id===productToAdd.id)
    // if found increment quantity 
    if (existingCartItem) {
        const editCart= cartItems.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: value }
            : cartItem
        );
        return editCart
      }
      console.log("ccccccccccccc")

    // retuen new array with midified cartitems  new cart item
    return [...cartItems, {...productToAdd, quantity:value}] 
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

const clearCart=(cartItems,cartItemToClear)=>{
  return []
}

//////////////////////////////////////////////////////////////////////////////////////////////////////


const cartReducer=(state,action)=>{

  const {type,payload}=action;
  switch(type){
    case 'SET_CART_ITEMS':
      return{
        ...state,
        ...payload
      }

    case 'SET_IS_CART_OPEN':
      return{
        ...state,
        isOpen:payload
      }

      default : 
      throw new Error(`unhandled type of ${type} in cartReducer`)
  }

}
//////////////////////////////////////////////////////////////////////////////////////////////////////
const INITIAL_STATE={
  isOpen:false,
  cartItems:[],
  cartCount:0,
  cartTotal:0,
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
export const CartProvider=({children})=>{

  const [{cartItems,isOpen,cartCount,cartTotal},dispatch]=useReducer(cartReducer,INITIAL_STATE)
    // const [isOpen,setIsOpen]=useState(false)
    // const [cartItems,setCartItems]=useState([])
    // const [cartCount,setCartCount]=useState(0)
    // const [cartTotal,setCartTotal]=useState(0)

    // useEffect(()=>{
    //   const newCartCount = cartItems.reduce((total,item)=> total+item.quantity,0 )
    //   setCartCount(newCartCount)
    // },[cartItems])

    // useEffect(()=>{
    //   const newTotalCount = cartItems.reduce((total,item)=> total+item.quantity* item.price,0 )
    //   setCartTotal(newTotalCount)
    // },[cartItems])

    useEffect(() => {

      const items = JSON.parse(localStorage.getItem('items'));
      console.log("pppppppppp2------------",items)
      if (cartItems.length>=1) {
        localStorage.setItem('items', JSON.stringify(cartItems));
        console.log("ssssssssssssssssssssssssssssssssssssssssss",items)
        
      }
    }, [cartItems]);


    useEffect(() => {

      const items = JSON.parse(localStorage.getItem('items'));
      if (items) {
        console.log("ssssssssssssssssssssssssssssssssssssssssss111",items)
        addAllItemToCardStorage(items) 
      }
    }, []);

    

    const setIsOpen=(bool)=>{
      dispatch({type:"SET_IS_CART_OPEN",payload:bool})
    }

    const updateCartItemsReducer= (newCartItems)=>{
      console.log("llllllllllll")
      const newCartCount = newCartItems.reduce((total,item)=> total+item.quantity,0 )

      const newTotalCount = newCartItems.reduce((total,item)=> total+item.quantity* item.price,0 )

      dispatch({type:"SET_CART_ITEMS",payload :{ cartItems:newCartItems,cartCount:newCartCount,cartTotal:newTotalCount }})
    }

    const addItemToCard=(productToAdd)=>{
      const newCartItems = addCartItem(cartItems,productToAdd)
      updateCartItemsReducer(newCartItems)
    }
    const addAllItemToCard=(productToAdd,value)=>{
      console.log("111")
      const newCartItems = addCartItemAll(cartItems,productToAdd,value)
      updateCartItemsReducer(newCartItems)
    }


    const addAllItemToCardStorage=(productToAdd)=>{
      console.log("111")
      const newCartItems = addCartItemAllFromStorage(productToAdd)
      updateCartItemsReducer(newCartItems)
    }

    const removeItemfromCart=(cartItemToRemove)=>{

      const newCartItems= removeCartItem(cartItems,cartItemToRemove)
      updateCartItemsReducer(newCartItems)
    }

    const clearItemfromCart=(cartItemToClear)=>{
      const newCartItems=clearCartItem(cartItems,cartItemToClear)
      updateCartItemsReducer(newCartItems)
    }

    const clearItemCart=()=>{
      const newCartItems=clearCart(cartItems)
      updateCartItemsReducer(newCartItems)
    }

    const value={ isOpen,
                  setIsOpen,
                  addItemToCard,
                  cartItems,
                  cartCount,
                  removeItemfromCart,
                  clearItemfromCart,
                  cartTotal,
                  clearItemCart,
                  addAllItemToCard
    }

    return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}