import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useTheme } from "../utils/ThemeContext";

const RestaurantCategory = ({ data, isOpen, handleToggle }) => {
  const {isDarkMode}=useTheme();
  const dark=isDarkMode
  return (
    <div className="w-full sm:w-8/12 md:w-6/12 mx-auto my-4">

      <div
        className={` ${dark?" bg-gray-800 ":" bg-white"} 
          border border-gray-200 
          rounded-xl 
          shadow-sm 
          hover:shadow-md 
          transition-shadow 
          cursor-pointer`}
      >
        {/* Header */}
        <div
          className="flex justify-between items-center px-5 py-2"
          onClick={handleToggle}
        >
          <span className={` ${dark?"text-shadow-white":"text-gray-800"}font-semibold text-lg md:text-xl `}>
            {data.title}{" "}
            <span className={`${dark?"text-shadow-white":"text-gray-500"} text-sm`}>
              ({data.itemCards?.length || 0})
            </span>
          </span>

          {/* Arrow Icon */}
          <span
            className={`text-gray-600 text-xl transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </div>

     
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-[1500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 py-4 bg-gray-50 rounded-b-xl">
            <ItemList
              items={data.itemCards || []}
              className="text-gray-700 font-medium tracking-wide"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
