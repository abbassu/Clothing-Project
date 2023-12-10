import React, { useState, useEffect } from "react";

function Updatedepartment() {
  const [all_product, set_all_product] = useState([]);
  useEffect(() => {
    fetch(
      "http://localhost:9999/product/DepartmentID?departmentId=2&currentPage=0"
    ) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => console.log("data", set_all_product(data[0].products)))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    console.log("jjjjj", all_product);
  }, [all_product]);

  return (
    <div>
      lllllllllllllllllllllll
      {all_product.map((item, index) => {
        return (
          <>
            <div>name: {item.name} </div>
            <div>id: {item.id} </div>
            <div>
              <hr />{" "}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Updatedepartment;
