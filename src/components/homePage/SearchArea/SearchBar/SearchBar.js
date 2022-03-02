import React    from "react";
import template from "./SearchBar.jsx";

class SearchBar extends React.Component {
  render() {
    return template.call(this);
  }
}

export default SearchBar;
