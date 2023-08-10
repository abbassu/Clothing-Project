// SearchBox.js
import React, { useState } from "react";
import "./SearchBox.scss";

const SearchBox = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="search-box">
      <input
        className="inputsearch"
        type="text"
        placeholder="Search About Product"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className="searchbutton" onClick={handleSearchClick}>
        Search <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchBox;
