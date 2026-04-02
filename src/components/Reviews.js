import React, { useState } from "react";
import { reviews } from "../utils/mockdata";
import { FaStar, FaRegComment, FaShareAlt, FaThumbsUp } from "react-icons/fa";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState(reviews);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  const addReviews = () => {
    if (!input.trim()) return;
    setAllReviews([{ name: name || "Anonymous", review: input, rating: 5 }, ...allReviews]);
    setInput("");
    setName("");
  };

  return (
    <div className="min-h-screen bg-amber-50 mt-15 py-10 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 tracking-tight">
          Customer Reviews
        </h2>

        {/* Input Card */}
        <div className="bg-white border border-amber-100 rounded-2xl p-5 mb-8 shadow-sm flex flex-col gap-3">
          <input
            type="text"
            value={name}
            placeholder="Your name?"
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-amber-400 focus:bg-white transition"
          />
          <input
            type="text"
            value={input}
            placeholder="Write your review..."
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-amber-400 focus:bg-white transition"
          />
          <button
            onClick={addReviews}
            className="self-end bg-amber-500 hover:bg-amber-600 active:scale-95 text-white text-sm font-medium px-5 py-2 rounded-lg transition"
          >
            Add Review
          </button>
        </div>

        {/* Reviews List */}
        <div className="flex flex-col gap-4">
          {allReviews.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Reviewer Name */}
              <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mt-1.5 mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={i < item.rating ? "text-amber-400 text-sm" : "text-gray-200 text-sm"}
                  />
                ))}
                <span className="ml-2 text-xs text-gray-400">{item.rating}/5</span>
              </div>

              {/* Review Text */}
              <p className="text-sm text-gray-600 leading-relaxed">{item.review}</p>

              {/* Divider */}
              <div className="border-t border-gray-100 mt-4 pt-3 flex gap-2 flex-wrap">
                <button className="flex items-center gap-1.5 text-xs font-medium text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:text-blue-500 hover:border-blue-200 hover:bg-blue-50 transition">
                  <FaThumbsUp /> Helpful
                </button>
                <button className="flex items-center gap-1.5 text-xs font-medium text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:text-green-500 hover:border-green-200 hover:bg-green-50 transition">
                  <FaRegComment /> Comment
                </button>
                <button className="flex items-center gap-1.5 text-xs font-medium text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:text-purple-500 hover:border-purple-200 hover:bg-purple-50 transition">
                  <FaShareAlt /> Share
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Reviews;