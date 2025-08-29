import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);

  // Show shimmer while menu is loading
  if (!menu) return <Shimmer />;

  // Destructure safely after menu is loaded
  const { restaurantName, categories } = menu;


  return (
    <div className="menu  flex mt-40 flex-col px-2 ">
      <h1 className="text-center font-bold text-[40px] shadow-amber-50 text-blue-700">{restaurantName}</h1>

{categories.map((category,index)=>
<RestaurantCategory key={index} data={category}/>
)}
    </div>
  );
};

export default RestaurantMenu;
