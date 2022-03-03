import "./BookTitle.css";
import React from "react";

function template() {
  return (
    <div className="text-xl font-semibold">
      <h1 className="text-md">{this.props.bookTitle}</h1>
    </div>
  );
};

export default template;
