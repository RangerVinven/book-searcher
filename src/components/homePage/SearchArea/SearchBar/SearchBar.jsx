import "./SearchBar.css";
import React from "react";

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Book Name" className="bg-gray-100 rounded-md p-1 w-96 shadow-sm" onChange={inputElement => {
        this.props.updateBookTitle(inputElement.target.value);
      }}/>
    </div>
  );
};

export default SearchBar;
