import React from "react";
import "./ImageSection.css";

const ImageSection = (props) => {
  const { image, title, date } = props;
  return (
    <div className="img-section">
      <p>
        {title}
        <br />
        Date: {date}
      </p>

      <img src={image} alt="" />
    </div>
  );
};

export default ImageSection;
