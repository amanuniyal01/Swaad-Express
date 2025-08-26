import React from "react";
import { reviews } from "../utils/mockdata";

const Reviews = () => {
    return (
        <div className="reviews-page">
            <h2>Customer Reviews</h2>
            <div className="reviews-list">
                {reviews.map((item, index) => (
                    <div key={index} className="review-card">
                        <h3>{item.name}</h3>
                        <p>{item.review}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reviews;