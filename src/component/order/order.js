import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import OrderItem from "../orderitem/orderitem";
import "./or.scss"
function OrderUser ({}){
    const location = useLocation();
    const element=location.state.data;
    return(
        <div className="allin">

            <div className="ooo">
                <h2 className="ssss">
                    User Information
                </h2>
                <div className="hisname ggg">
                      Name &nbsp;: &nbsp;  {element.name} 
                </div>
                <div className="hisphone ggg">
                   Phone &nbsp;: &nbsp; {element.phone}
                </div>
                <div className="hiscity ggg">
                  Address &nbsp;:&nbsp;  {element.city} /&nbsp;{element.street}-street
                </div>
                <div className="hiscartTotal ggg">
                  TOtel Payment &nbsp;: &nbsp; {element.cartTotal}$
                </div>
                <div className="hiscurrentDate ggg">
                    Order Date &nbsp;:&nbsp;{element.currentDate}
                </div>
            </div>

           
            
            <div className="ooo">
                <h2 className="ssss">Order Information</h2>
                <div className="yyy"> 
                {element.cartItems.map((cartItem)=>{
                    return(
                        <div>
                                <OrderItem cartItem={cartItem}/>
                        </div>
                    )
                    })}    
                </div>
            </div>


        </div>
    )
}export default OrderUser