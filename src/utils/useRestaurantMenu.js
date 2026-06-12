import { useState, useEffect } from "react";
import { mockMenuData } from "./mockdata";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    
    setTimeout(() => {
      setMenu(mockMenuData[resId]);
    }, 500);
  }, [resId]);

  return menu; 
};

export default useRestaurantMenu;
