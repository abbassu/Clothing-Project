// default 
//inverted
//google sign in
import "./button-form.scss"

const BUTTON_TYPE_CLASSES={
    google:"google-sign-in",
    inverted:"inverted",
    delete:"delete"
}

const Button =({children,buttonType,...otherProps})=>{
    return(
        <button  className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}  ` } {...otherProps}>{children}</button>
    )
}; export default Button
