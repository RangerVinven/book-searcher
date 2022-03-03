import "./BookResult.css";
import React from "react";

import BookImage from "./BookImage";
import BookTitle from "./BookTextContainer/BookTitle";
import BookAuthor from "./BookTextContainer/BookAuthor";
import BookDesc from "./BookTextContainer/BookDesc";

function BookResult() {
  return (
    <div className="flex">
      <BookImage thumbnailSrc={this.props.thumbnailSrc} />
      <div className="ml-3">
        <BookTitle bookTitle={this.props.bookTitle} />
        <BookAuthor author={this.props.author} />

        <div className="max-w-xl h-56 overflow-auto mt-2.5">
          <BookDesc desc={this.props.desc} />
        </div>

        <div className="mt-5 italic">
          ISBN-10: {this.props.ISBN10}
          <br />
          ISBN-13: {this.props.ISBN13}
        </div>

      </div>
    </div>
  );
};

export default BookResult;
