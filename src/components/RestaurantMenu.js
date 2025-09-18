import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);

  // State to track which category is open
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  // Show shimmer while loading
  if (!menu) return <Shimmer />;

  // Extract restaurantName & categories safely
  const { restaurantName, categories } = menu;

  const handleToggle = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
  };

  return (
    <div
      className="menu mx-auto mt-20 md:w-[80%] mb-18 flex flex-col px-4 py-6 rounded-xl overflow-y-auto"
      style={{
        backgroundImage: `linear-gradient(
                          to right,
                          rgba(0,0,0,0.2),
                          rgba(0,0,0,0.3)
                        ), 
                        url("https://img.pikbest.com/backgrounds/20191025/simple-burger-food-fast-food-background-synthesis_1905549.jpg!bw700")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <h1 className="text-[35px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-700 text-center mb-3 drop-shadow-lg">
        {restaurantName}
      </h1>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={index}
          data={category}
          isOpen={openCategoryIndex === index}
          handleToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
