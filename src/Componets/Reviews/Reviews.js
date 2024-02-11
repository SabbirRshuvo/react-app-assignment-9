import React, { useEffect, useState } from "react";
import "./Reviews.css";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews, setReviews]);
  return (
    <div className="container">
      <h2>THis is reviews page{reviews.length}</h2>
      {
        reviews.map(review => <Review
        key={review.id}
        review={review}>
        </Review>)
      }
    </div>
  );
};

export default Reviews;
