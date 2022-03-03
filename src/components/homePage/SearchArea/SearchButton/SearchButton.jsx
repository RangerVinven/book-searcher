import "./SearchButton.css";
import React from "react";

function SearchButton() {
  return (
    <div>
      <button className="text-white ml-5 p-1 bg-purple-500 rounded-md font-bold" onClick={() => {
        this.props.buttonOnClick(this.props.bookTitleProp);
      }}>Search</button>
    </div>
  );
};

export default SearchButton;
