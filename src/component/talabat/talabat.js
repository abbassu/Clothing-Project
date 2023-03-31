import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gettalabat } from "../../utils/firebase/firebase";
import "./talabat.scss";
import { Link } from "react-router-dom";
function Orders(){

    const [orders,setorders]=  useState ([])
    const navigate=useNavigate()

   async function setdata (){
        let d=await  gettalabat()
        setorders(d)
    }

    const  sentdata =async (element)=>{
       
    }

    useEffect(()=>{
        setdata()
        // setdata2()
    },[])


    

    return(
        <div>
             <h1 className="lablee">All Orders</h1>
            {/* <button onClick={setdata}>fffffffffffffffffffff</button> */}
            {orders.map((Element,index)=>{
                return(
                    <div className="back">
                       
                    <div className="order" >
                        
                    <span className="index"> {index}</span>
                    <span className="phone talab"> <span className="frow">Name </span>   :{Element.name?Element.name :"ahamd"}  </span>
                        <span className="phone talab"> <span className="frow">Phone </span>  :  {Element.phone}  </span>
                        <span className="address talab"> <span className="frow">Address </span>  :  {Element.city} - {Element.street}  </span>
                        <span className="mony talab"> <span className="frow"> Total Payment</span>   :   {Element.cartTotal}$  </span>
                        <span className="date talab"> <span className="frow"> Order Date</span>   :   {Element.currentDate} </span>
                        <button className="seeOrder gg" onClick={()=>{sentdata(Element)}}>Delete <span> <i class="fa-solid fa-trash gfd"></i> </span></button>
                        <Link to="/orderuser" state={{ data: Element }} >
                            <button className="seeOrder" onClick={()=>{sentdata(Element)}}>See Order <span> <i class="fa-solid fa-arrow-right gfd"></i> </span></button>
                        </Link>
                        
                    
                    </div>
                    </div>

                )
            })}
                  
        </div>
    )
}

export default Orders