import "./BookDesc.css";
import React from "react";

function BookDesc() {
  return (
    <div className="book-desc">
      <h1>{this.props.desc}</h1>
    </div>
  );
};

export default BookDesc;
