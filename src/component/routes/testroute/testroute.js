// import React, { useState } from "react";
// import FontSizeComboBox from "../../listsize/Listsize";
// function Testing() {
//   const fontSizes = [
//     "xx-small",
//     "x-small",
//     "small",
//     "medium",
//     "large",
//     "x-large",
//     "xx-large",
//     "3x-large",
//     "4x-large",
//     "5x-large",
//     "6x-large",
//   ];
//   const [quantity, setquantity] = useState(2);
//   const increaseQuantity = (event) => {
//     if (quantity != fontSizes.length) setquantity((prev) => prev + 1);
//   };
//   const [detailsNum, setDetailsNum] = useState(0);
//   const repeatedDivs = [];
//   for (let i = 0; i < quantity; i++) {
//     repeatedDivs.push(<FontSizeComboBox fontSizes={fontSizes} />);
//   }
//   return (
//     <div>
//       <label htmlFor="quantity">
//         Quantity: {quantity} &nbsp; &nbsp;&nbsp;{" "}
//       </label>
//       <button onClick={increaseQuantity}> + </button>
//       <div>{repeatedDivs}</div>
//     </div>
//   );
// }
// export default Testing;

import React, { useState } from "react";
function Testing() {
  const [numberArray, setNumberArray] = useState([]);
  const addNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100); // Generate a random number
    setNumberArray([...numberArray, randomNumber]); // Add the number to the array
  };
  return (
    <div>
      <button onClick={addNumber}>Add Number</button>
      <ul>
        {numberArray.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}
export default Testing;
