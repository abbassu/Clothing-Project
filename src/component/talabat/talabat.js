import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gettalabat } from "../../utils/firebase/firebase";
import "./talabat.scss";
import { Link } from "react-router-dom";
import { GetOrder } from "../../utils/firebase/firebase";
import { DeleteOrder } from "../../utils/firebase/firebase";
function Orders(){

    const [orders,setorders]=  useState ([])
    const navigate=useNavigate()
    const [arrayOfTalabat,setarrOfTalabat]=useState([])
    const [textSearch,setTextSearch]=useState()


   async function setdata (){
        let d=await  gettalabat()
        setorders(d)
        setarrOfTalabat(d);
    }

    const  DeleteData =async (element)=>{

      await  DeleteOrder(element)
      setdata();
    }
    async function getget(){
         console.log("data form order",await GetOrder())
    }

    useEffect(()=>{
        setdata()
    },[])


    function searchFilter(event){
        console.log(event.target.value);
        console.log("search by ",textSearch);
        
        let updatedList=[];
        updatedList = orders.filter((element) =>{ 
            return element[textSearch].toLowerCase().includes(event.target.value.toLowerCase());
        });
        setarrOfTalabat(updatedList);
    }

    function selectType(event){
        setTextSearch(event.target.value)
    }

    

    return(
        <div>
             <h1 className="lablee">All Orders</h1>
             {/* <button onClick={getget}>  gg</button> */}
             <div className="searchFilter">
                <div className="boxing uu">
                    <span className="search"> 
                        <i class="fa-solid fa-magnifying-glass"></i>
                        </span> 
                    <input type="text" name="" className="inin inputClass" id="" onChange={searchFilter}/>
                    
                </div>
                <div className="boxing">
                    <span className="search"> 
                        Search By
                        </span> 
                    <select name="" id="" className="inin kk" onChange={selectType}  > 
                        <option value="phone"   >Phone</option>
                        <option value="name">Name</option>
                        <option value="currentDate">Date</option>
                    </select>
                </div>
             </div>
            {/* <button onClick={setdata}>fffffffffffffffffffff</button> */}
            {arrayOfTalabat.map((Element,index)=>{
                return(
                    <div className="back">
                       
                    <div className="order" >
                        
                    <span className="index"> {index}</span>
                    <span className="phone talab"> <span className="frow">Name </span>   :{Element.name?Element.name :"ahamd"}  </span>
                        <span className="phone talab"> <span className="frow">Phone </span>  :  {Element.phone}  </span>
                        <span className="address talab"> <span className="frow">Address </span>  :  {Element.city} - {Element.street}  </span>
                        <span className="mony talab"> <span className="frow"> Total Payment</span>   :   {Element.cartTotal}$  </span>
                        <span className="date talab"> <span className="frow"> Order Date</span>   :   {Element.currentDate} </span>
                        <button className="seeOrder gg" onClick={()=>{DeleteData(Element.info)}}>Delete <span> <i class="fa-solid fa-trash gfd"></i> </span></button>
                        <Link to="/orderuser" state={{ data: Element }} >
                            <button className="seeOrder" >See Order <span> <i class="fa-solid fa-arrow-right gfd"></i> </span></button>
                        </Link>
                        
                    
                    </div>
                    </div>

                )
            })}
                  
        </div>
    )
}

export default Orders