import React, { useState } from "react";
import { reviews } from "../utils/mockdata";
// Icons
import { FaStar, FaRegComment, FaShareAlt, FaThumbsUp } from "react-icons/fa";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState(reviews);
  const [input, setInput] = useState("");

  const addReviews = () => {
    if (!input.trim()) return;

    const newReview = {
      name: "User",
      review: input,
      rating: 5,
    };

    setAllReviews([newReview, ...allReviews]); 
    setInput(""); 
  };

  return (
    <div className="reviews-page max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Customer Reviews
      </h2>

      {/* Input Section */}
      <div className="mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your review..."
          className="border p-2 rounded w-full"
        />

        <button
          onClick={addReviews}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Review
        </button>
      </div>

      {/*  Reviews List */}
      <div className="space-y-8">
        {allReviews.map((item, index) => (
          <div
            key={index}
            className="review-card bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {item.name}
            </h3>


            {/*  Rating */}
            <div className="flex items-center mt-2 text-yellow-500">
              {Array.from({ length: 5 }, (_, starIndex) =>
                starIndex < item.rating ? (
                  <FaStar key={starIndex} />
                ) : (
                  <FaStar key={starIndex} className="text-gray-300" />
                )
              )}
              <span className="ml-2 text-sm text-gray-500">
                {item.rating}/5
              </span>
            </div>

          
            <p className="mt-4 text-gray-600">{item.review}</p>

         
            <div className="flex gap-8 mt-6 text-gray-600 text-sm font-medium">
              <button className="flex items-center gap-2 hover:text-blue-500 transition">
                <FaThumbsUp /> Helpful
              </button>
              <button className="flex items-center gap-2 hover:text-green-500 transition">
                <FaRegComment /> Comment
              </button>
              <button className="flex items-center gap-2 hover:text-purple-500 transition">
                <FaShareAlt /> Share
              </button>
            </div>

            <div className="mt-6 h-[1px] bg-gray-200"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;