import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);

  // Show shimmer while menu is loading
  if (!menu) return <Shimmer />;

  // Destructure safely after menu is loaded
  const { restaurantName, categories } = menu;

  return (
    <div className="menu">
      <h1>{restaurantName}</h1>

      {categories?.map((category, index) => (
        <div key={index}>
          <h2>
            <span className="categ">{category.title}</span>
          </h2>
          <ul>
            {category.itemCards?.map((item) => (
              <li className="list-menu" key={item.id}>
                <span className="name-item">{item.name}</span> = ₹
                {item.price / 100}
                <p className="para-item">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
