import { CDN_URL } from "../utils/constants";
import { useTheme } from "../utils/ThemeContext";

const RestaurantCard = ({ resData }) => {
  const { isDarkMode } = useTheme(); // ✅ get dark mode state

  if (!resData) {
    return (
      <div
        className={`res-card w-[250px] sm:w-64 m-[10px] rounded-xl shadow-md p-4 
          ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-orange-100 text-gray-900"}`}
      >
        No Data Available
      </div>
    );
  }

  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
    resData?.info;

  return (
    <div
      className={`res-card flex-wrap contain-content w-[250px] sm:w-64 m-[10px] rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg mt-10 
        ${isDarkMode ? "bg-gray-500 text-gray-100" : "bg-orange-100 text-gray-900"}`}
    >
      <img
        className="res-logo h-[180px] w-full object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="res-details p-[15px]">
        <h3
          className={`res-name text-lg font-bold truncate 
            ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}
        >
          {name}
        </h3>
        <p
          className={`res-cuisines text-sm line-clamp-1 mb-[10px] 
            ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          {cuisines.join(", ")}
        </p>
        <div className="res-info flex items-center justify-between">
          <span
            className={`res-rating font-semibold ${
              avgRating >= 4
                ? isDarkMode
                  ? "text-green-400"
                  : "text-green-700"
                : avgRating >= 3
                ? isDarkMode
                  ? "text-yellow-400"
                  : "text-yellow-600"
                : isDarkMode
                ? "text-red-400"
                : "text-red-600"
            }`}
          >
            ⭐ {avgRating}
          </span>
          <span className="res-cost">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

// ✅ Higher Order Component (Promoted Label also dark-mode aware)
export const showpromotedCard = (RestaurantCard) => {
  return (props) => {
    const { isDarkMode } = useTheme();
    return (
      <div className="relative">
        <label
          className={`z-30 absolute top-3 -left-8 transform -rotate-45 text-[10px] font-bold uppercase px-10 py-1 shadow-md 
            ${isDarkMode 
              ? "bg-gradient-to-r from-gray-700 to-gray-500 text-gray-100" 
              : "bg-gradient-to-r from-orange-400 to-yellow-400 text-white"}`}
        >
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
