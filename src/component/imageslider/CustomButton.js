import React from "react";

// Custom Previous Arrow Component
const CustomPrevArrow = (props) => (
  <div className="custom-arrow prev-arrow" {...props}>
    <i class="fa-solid fa-arrow-left fa-2xl"></i>
  </div>
);

// Custom Next Arrow Component
const CustomNextArrow = (props) => (
  <div className="custom-arrow next-arrow" {...props}>
    <i class="fa-solid fa-arrow-right fa-2xl"></i>
  </div>
);

export { CustomPrevArrow, CustomNextArrow };
