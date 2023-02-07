import React from "react";
import Data from "./../../shop_data/data.json"
function Shop(){
    return(
        <div>
            ahmad
 {Data.map((item)=>{
    return(
        <div>
            {item.name}
        </div>
    )
 })}
        </div>
    )
}export default Shop