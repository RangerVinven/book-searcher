import React    from "react";
import template from "./BookDesc.jsx";

class BookDesc extends React.Component {
  render() {
    return template.call(this);
  }
}

export default BookDesc;
