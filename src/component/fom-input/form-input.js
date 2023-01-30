import React from "react";
import "./form-input.scss"
function FormInput({labelName,optionInput}){

    console.log("length",optionInput.value.length)
    return(
        <div className="group">
            <input className="form-input" {...optionInput} />
            {labelName &&
                        <label className={`${optionInput.value.length ? 'shrink':''} form-input-label`}>
                        {labelName}
                    </label>
            }

            
        </div>
    )

}export default FormInput