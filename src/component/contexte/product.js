import React, { useEffect, useState } from "react";
import { createContext,useContext } from "react";
// import Product from "./../../shop_data/data.json"
import SHOP_DATA from "../../shop_data/data";
import { addCollectionAndDocuments } from "../../utils/firebase/firebase";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";


export const ProductContext=createContext({})

export const ProductProvider=({children})=>{
 

    useEffect(()=>{
        addCollectionAndDocuments("categories",SHOP_DATA)
    },[])

    useEffect(()=>{
        const getData= async(  )=>{
            const ff= await getCategoriesAndDocuments()
            console.log("ff",ff)
            serProduct(ff)
           }
           getData()
    },[])

    const [product,serProduct]=useState([])
    const value={product}
    
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
