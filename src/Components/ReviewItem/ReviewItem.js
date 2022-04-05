import React from "react";
import { FaStar } from "react-icons/fa";
import "./ReviewItem.css";

const ReviewItem = ({ review }) => {
  const { name, img, ratings, content } = review;
  return (
    <div className="grid-item">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>{content}</p>
      <span>
        <FaStar /> {ratings}
      </span>
    </div>
  );
};

export default ReviewItem;
