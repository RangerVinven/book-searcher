import "./BookAuthor.css";
import React from "react";

function BookAuthor() {
  return (
    <div className="book-author">
      <h1>By {this.props.author}</h1>
    </div>
  );
};

export default BookAuthor;
