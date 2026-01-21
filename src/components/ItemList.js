import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items, isCartPage = false }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.id));
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          className="p-6 bg-gray-100 mb-4 border rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex justify-between items-center bg-red">
            <div className="flex-1 pr-4">
              <h3 className="text-[22px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
                {item.name}
              </h3>
              <p className="text-[22px] text-gray-700 font-[200] leading-relaxed mb-2">
                {item.description}
              </p>
              <p className="text-[20px] font-semibold text-green-600">
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
