import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../button/button'
function Operation() {
    const nav=useNavigate()
  return (
    <div className='opaeration'>

        <Button > Add Item </Button>
        <Button> Delete Item </Button>


    </div>
  )
}

export default Operation