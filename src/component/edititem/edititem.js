import React, { useState } from "react";
import "./edititem.scss"
function EditItem(){
    const [search,setsearch]=useState("")



    return(
        <div className="edititem">
            edit item
            <input type="text"   />
            <label for="category">Choose a car:</label>
            <select id="category" name="category" size="">
                <option value="fitness">Fitness</option>
                <option value="glasses">Glasses</option>
                <option value="hats">Hats</option>
                <option value="jackets">Jackets</option>
                <option value="kids">Kids</option>
                <option value="mens">Mens</option>
                <option value="perfume">Perfume</option>
                <option value="sneakers">Sneakers</option>
            </select>
        </div>
    )
}export default EditItem