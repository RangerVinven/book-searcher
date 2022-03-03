import "./SearchArea.css";
import React from "react";

import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

function SearchArea() {
  return (
    <div className="flex mt-12">
      <SearchBar />
      <SearchButton />
    </div>
  );
};

export default SearchArea;
