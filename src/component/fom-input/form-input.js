import React from "react";
function FormInput({labelName,...otherProps}){

    return(
        <div>
            <label>
                {labelName}
            </label>
            <input {...otherProps} />
        </div>
    )

}export default FormInput