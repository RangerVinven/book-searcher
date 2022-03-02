import React    from "react";
import template from "./BookTitle.jsx";

class BookTitle extends React.Component {
  render() {
    return template.call(this);
  }
}

export default BookTitle;
