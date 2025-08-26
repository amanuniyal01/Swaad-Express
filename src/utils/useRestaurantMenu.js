import { useState, useEffect } from "react";
import { mockMenuData } from "./mockdata";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    // Simulating API fetch with mock data
    setTimeout(() => {
      setMenu(mockMenuData[resId]);
    }, 500);
  }, [resId]);

  return menu; // return the restaurant menu
};

export default useRestaurantMenu;
