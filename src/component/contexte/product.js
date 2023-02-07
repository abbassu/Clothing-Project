import React, { useState } from "react";
import { createContext,useContext } from "react";
import Product from "./../../shop_data/data.json"


export const ProductContext=createContext({})

export const ProductProvider=({children})=>{
 
    const [product,serProduct]=useState(Product)
    const value={product}
    
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
