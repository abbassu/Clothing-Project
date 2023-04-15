import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../button/button'
import "./operation.scss";

function Operation() {
    const nav=useNavigate()
  return (
    <div className='opaeration'>

<div className='kkk'>
<button className='aaa' onClick={()=>{
            nav("/additem")
        }} > Add Item <span className='ffff'><i class="fa-solid fa-plus"></i></span> </button>
        <button className='ddd' onClick={()=>{
            nav("/deleteitem")
        }}> Delete Item  <span className='ffff' ><i class="fa-solid fa-trash"></i></span> </button>

</div>


    </div>
  )
}

export default Operation