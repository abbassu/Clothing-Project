import "./tt.scss";
import React, { useState } from "react";

function ParentComponent() {
  const [dataArray, setDataArray] = useState(["apple", "banana", "cherry"]);

  const handleArrayChange = () => {
    // Simulate changing the array
    setDataArray(["grape", "kiwi", "orange"]);
  };

  return (
    <div>
      <button onClick={handleArrayChange}>Change Array</button>
      <ChildComponent
        dataProp={dataArray}
        handleArrayChange={handleArrayChange}
      />
      <ChildComponent
        dataProp={dataArray}
        handleArrayChange={handleArrayChange}
      />
      <ChildComponent
        dataProp={dataArray}
        handleArrayChange={handleArrayChange}
      />
    </div>
  );
}

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={props.handleArrayChange}>handlerddd</button>
      <ul>
        {props.dataProp.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ParentComponent;

// function Test() {
//   return (
//     <div className='sllidebarr'>

//     <Carousel className='fafa'>
//       <Carousel.Item className='fafaibn'>
//         <img
//           className="d-block w-90 "
//           src={logo1}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p className='tete'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item className='fafaibn'>
//         <img
//           className="d-block w-90"
//           src={logo2}
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p className='tete'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item className='fafaibn'>
//         <img
//             className="d-block w-90"
//             src={logo3}
//             alt="Third slide"
//         />
//         <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p className='tete'>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>

//     </div>
//   )
// }

// export default Test
