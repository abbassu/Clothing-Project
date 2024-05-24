import React, { useState, useEffect } from "react";
import axios from "axios";

const Departmentproduct = ({ paginationNumber }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allDepartment, setAllDepartment] = useState([]);
  const [parentName, setParentName] = useState(0);

  async function getAllDepartment() {
    const response = await axios.get(`http://localhost:9999/department/`);
    setAllDepartment(response.data.departments);
    console.log("fff", response.data.departments);
  }

  useEffect(() => {
    getAllDepartment();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        console.log("ioioio", currentPage);
        const response = await axios.get(
          `http://localhost:9999/product/DepartmentID?departmentId=${parentName}&currentPage=${currentPage}`
        );
        console.log("response.data", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [parentName]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleChangeSelected = (id) => {
    console.log(id.target.value);
    // setProductData({ ...productData, department_id: id.target.value });
    console.log("id", id.target.value);
    setParentName(id.target.value);
  };

  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="DepartmentChoice">
            <h5>اختر القسم التابع له :</h5>
            <select value={parentName} onChange={handleChangeSelected}>
              <option value="0">رئيسي </option>
              {allDepartment.map((item) => {
                return <option value={item.id}>{item.name} </option>;
              })}
              {/* Add more options as needed */}
            </select>
          </div>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
          <div>
            {[...Array(10).keys()].map((page) => (
              <button key={page} onClick={() => handlePageChange(page)}>
                {page + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Departmentproduct;
