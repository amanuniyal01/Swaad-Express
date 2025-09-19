import RestaurantCard, { showpromotedCard } from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Starter from "./Starter";
import useOnlineStatus from "../utils/useOnlineStatus";
import { WifiOff } from "lucide-react";
import UserContext from "../utils/usercontext";
import { useTheme } from "../utils/ThemeContext"; // ✅ import theme context

const Body = () => {
  const [RestaurantList, setRestaurantList] = useState([]);
  const [filterRestaurant, setfilterRestaurant] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const RestaurantPromoted = showpromotedCard(RestaurantCard);
  const { loggedInUser, setuserName } = useContext(UserContext);
  const { isDarkMode } = useTheme(); // ✅ get dark mode state

  useEffect(() => {
    setTimeout(() => {
      setRestaurantList(resList);
      setfilterRestaurant(resList);
    }, 500); // simulate API load
  }, []);

  const status = useOnlineStatus();
  if (status === false) {
    return (
      <div
        className={`offline flex content-center items-center flex-col mt-[300px] ${
          isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <WifiOff size={60} className="wifi-icon h-[100px] w-[100px]" />
        <h1>Offline 🛑</h1>
        <p className="text-[20px]">Sorry, it seems that you are currently offline</p>
      </div>
    );
  }

  return RestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div
      className={`body min-h-full pt-[50px] transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Starter />

      {/* Filter/Search Section */}
      <div className="filter mb-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10">
        <input
          className={`search-text flex items-center justify-center 
            w-[260px] sm:w-[300px] md:w-[420px] 
            cursor-pointer border-none text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] 
            h-[40px] rounded-md px-4 shadow-md hover:opacity-90
            ${
              isDarkMode
                ? "bg-gray-800 text-gray-100 placeholder-gray-400"
                : "bg-white text-gray-800 placeholder-gray-500"
            }`}
          type="text"
          placeholder="🔍 Search restaurants, cuisines..."
          value={SearchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const filterRestaurant = RestaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              setfilterRestaurant(filterRestaurant);
            }
          }}
        />

        <button
          className={`filter-btn px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-3 md:text-lg text-white rounded-[6px] font-bold m-2 cursor-pointer text-center
            ${
              isDarkMode
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-purple-400 hover:bg-[rgba(6,18,245,0.6)]"
            }`}
          onClick={() => {
            let filterData = RestaurantList.filter(
              (res) => res.info.avgRating > 4.2
            );
            setfilterRestaurant(filterData);
          }}
        >
          Popular Picks
        </button>

        <div className="flex items-center space-x-3 m-3">
          <label className="font-bold w-28 text-right">UserName:</label>
          <input
            className={`flex-1 md:w-50 h-10 w-27 md:max-w-md p-3 text-sm md:text-lg rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400
              ${
                isDarkMode
                  ? "bg-gray-800 text-gray-100 border-gray-700 placeholder-gray-400"
                  : "bg-purple-500 text-white border-gray-300 placeholder-gray-200 hover:bg-blue-500"
              }`}
            value={loggedInUser}
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="res-container flex items-center justify-evenly flex-wrap w-full">
        {filterRestaurant.map((restaurant) => (
          <Link
            className="card-link"
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            {restaurant.info.promoted ? (
              <RestaurantPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
