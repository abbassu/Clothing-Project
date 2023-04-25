import React, { useEffect, useState } from 'react'
import "./slide.scss"
import { motion } from "framer-motion";

function Slide({ima}) {
  console.log(ima)
  console.log("immmma".imm)
  const [imm,setimm]=useState(ima)
  useEffect(()=>{
      console.log("immmma".imm)
  },[])
    const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }
  return (
    <div className='slideee'>
      <motion.img
        key={ima}
        src={ima}
        alt=""
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.5 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        initial={{ opacity: 0.4 }}
      />
      {/* <button onClick={handleClick}>Click me</button> */}

      <motion.div
      animate={{ opacity: 1, scale: 1.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.5 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => console.log("Animation completed!")}
    >
      Hello Worl7777777777777777777777777777777777777d!
    </motion.div>
    </div>
  )
}

export default Slide