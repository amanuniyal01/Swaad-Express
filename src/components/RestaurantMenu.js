import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);

  // State to track the currently open category index
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  // Show shimmer while menu is loading
  if (!menu) return <Shimmer />;

  // Destructure safely after menu is loaded
  const { restaurantName, categories } = menu;

  const handleToggle = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
  };

  return (
    <div className="menu flex mt-40 flex-col px-2 ">
      <h1 className="text-[35px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 text-center mb-3 drop-shadow-lg">
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
