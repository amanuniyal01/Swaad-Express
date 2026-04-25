import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import toast from "react-hot-toast";
import { useTheme } from "../utils/ThemeContext";

const ItemList = ({ items, isCartPage = false }) => {
  console.log(items)
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    toast.success(`${item.name} added to cart 🛒`, {
      icon: "✅",
      className: `
    flex items-center gap-3
     "bg-white text-gray-900"
  `,
    });
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.id));
  };
  const{isDarkMode}=useTheme();
  const dark=isDarkMode;

  return (
    <div className={` ${dark?"bg-gray-800":""} max-w-3xl mx-auto`}>
      {items.map((item, index) => (
        <div 
          key={`${item.id}-${index}`}
          className="p-4 bg-gray-200/ mb-4 border rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex justify-between items-center bg-red">
            <div className="flex-1 pr-4">
              <h3 className="text-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
                {item.name}
              </h3>
              <p className={`text-[15px] ${dark?"text-shadow-white":"text-gray-700"} font-[200] leading-relaxed mb-2`}>
                {item.description}
              </p>
              <p className="text-[15px] font-semibold text-green-600">
                ₹{item.price / 100}
              </p>
            </div>

            {/* Show Add or Remove button based on page */}
            {isCartPage ? (
              <button
                className="bg-red-500 text-white text-[18px] px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
                onClick={() => handleRemoveItem(item)}
              >
                Remove ❌
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white text-[18px] px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
