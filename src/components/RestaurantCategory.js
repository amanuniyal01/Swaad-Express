import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-6/12 mx-auto my-6">
      {/* Category Card */}
      <div className="bg-gray-200 rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-shadow duration-300 cursor-pointer">
        <div
          className="flex justify-between items-center p-5"
          onClick={handleClick}
        >
          {/* Title */}
          <span className="font-semibold text-xl text-gray-800 tracking-wide">
            {data.title} ({data.itemCards?.length || 0})
          </span>
          {/* Arrow */}
          <span
            className={`transform transition-transform duration-300 text-gray-600 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ⬇️
          </span>
        </div>

        {/* Toggle item list */}
        {isOpen && (
          <div className="p-4 border-t border-gray-300 bg-white rounded-b-xl">
            <ItemList
              items={data.itemCards || []}
              className="text-gray-700 font-medium tracking-wide"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
