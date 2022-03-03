import "./SearchArea.css";
import React from "react";

import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

function SearchArea() {
  return (
    <div className="flex mt-12">
      <SearchBar updateBookTitle={this.props.updateBookTitle} />
      <SearchButton buttonOnClick={this.props.buttonOnClick} bookTitleProp={this.props.bookTitle} />
    </div>
  );
};

export default SearchArea;
