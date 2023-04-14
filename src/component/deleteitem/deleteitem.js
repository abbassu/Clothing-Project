import React, { useEffect, useState,useContext } from "react";
import { ProductContext } from "../contexte/product";
import "./delete.scss"
import { DeleteProduct } from "../../utils/firebase/firebase";
function DeleteItem(){
    const [textSearch,setTextSearch]=useState("")
    const [rr,setrr]=useState("")
    const [SearchOn,setSearchOn]=useState("")
    const [arr,setarr]=useState([])

    const [orders,setorders]=  useState ([])
    const [arrayOfTalabat,setarrOfTalabat]=useState([])
    const {product}=useContext(ProductContext)
    function selectType(event){
        setTextSearch(event.target.value)
        console.log("search by ",event.target.value)
        setrr("")
    }
    function selectOn(event){
        setSearchOn(event.target.value)
        console.log("search on ",event.target.value)
        console.log("search onnnnn ",product)
        let updatedList=[];
        Object.keys(product).filter((element) =>{ 
            if(element.toLowerCase()===event.target.value.toLowerCase()){
                updatedList=product[element]
            }
            else{
            }
        });
        console.log("items ",updatedList);
        setarr(updatedList)
        setarrOfTalabat(updatedList);
        setrr("")
    }
    function searchFilter(event){
        console.log(event.target.value);
        setrr(event.target.value)
        let updatedList=[];
        updatedList = arrayOfTalabat.filter((element) =>{ 
            if(textSearch==="name"){
                console.log("textsearch ",textSearch)
                return element[textSearch].toLowerCase().includes(event.target.value.toLowerCase())
                

            }
            else if (textSearch ==="id" ||textSearch ==="price" ){
                console.log("id ",event.target.value.toString())
                return element[textSearch].toString().includes(event.target.value.toString());
            }
        });
        setarr(updatedList);
    }
    

    function Deleteitem(iddd){
        let updatedList=[];
        updatedList = arr.filter((element) =>{ 
          return  (element.id ===iddd) ? false :true;
        });
        setarr(updatedList);
    }
    function Save(){
        console.log("searcj on",SearchOn)
        DeleteProduct(SearchOn,arr)
    }



    return(
        <div>

<h1 className="lablee ddd">Delete Item</h1>
            <div className="searchFilter ddd">
                
                <div className="boxing uu">
                    <span className="search"> 
                        <i class="fa-solid fa-magnifying-glass"></i>
                        </span> 
                    <input type="text" name="" value={rr} className="inin inputClass" id="" onChange={searchFilter}/>
                </div>
                <div className="boxing">
                    <span className="search"> 
                        Search By
                        </span> 
                    <select name="" id="" className="inin kk" onChange={selectType}  >
                        <option value="id">ID</option>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                    </select>
                </div>
                <div className="boxing">
                    <span className="search"> 
                        Search On
                    </span> 
                    <select name="" id="" className="inin kk" onChange={selectOn}  > 
                        <option value="hats">Hats</option>
                        <option value="fitness">Fitness</option>
                        <option value="kids">Kids</option>
                        <option value="perfume">Perfume</option>
                        <option value="sneakers">Sneakers</option>
                        <option value="jackets">Jackets</option>
                        <option value="glasses">Glasses</option>
                        <option value="mens">Mens</option>
                    </select>
                </div>
                <div className="boxing">
                </div>
            </div>
            <div className="tale">
                <div className="jojo">
                    <button  className="saveupdates" onClick={()=>{
                        Save()
                    }}> Save Updates </button>
                </div>

                {arr.map((element)=>{
                    return(
                    <div className="opoo ">
                        <div className="opname e22">
                         <span className="eie"> Name </span>     {element.name} 
                        </div>
                        <div className="oppri e22">
                        <span className="eie"> Price </span>  {element.price} $
                        </div>
                        <div className="opid e22">
                        <span className="eie"> ID </span>  {element.id}
                        </div>
                        <div className="e22">
                            <button onClick={()=>{Deleteitem(element.id)}}>Delete</button>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )

} export default DeleteItem