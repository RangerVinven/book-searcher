import "./BookImage.css";
import React from "react";

function BookImage() {
  return (
    <div className="">
      <img className="h-auto w-56" src={this.props.thumbnailSrc} />
    </div>
  );
};

export default BookImage;
