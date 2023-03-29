import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { gettalabat } from "../../utils/firebase/firebase";
import "./talabat.scss"
function Orders(){

    const [orders,setorders]=  useState ([])

   async function setdata (){
        let d=await  gettalabat()
        setorders(d)
    }

    const  setdata2 =async ()=>{
        let d=await  gettalabat()
        console.log("data 2",d)
        // setorders(d) 
    }

    useEffect(()=>{
        setdata()
        // setdata2()
    },[])


    

    return(
        <div>
             <h1>All Orders</h1>
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
                       <button className="seeOrder">See Order <span> <i class="fa-solid fa-arrow-right"></i> </span></button>
                    </div>
                    </div>

                )
            })}
                  
        </div>
    )
}

export default Orders