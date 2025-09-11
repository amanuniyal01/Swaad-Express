import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  // Calculate total price
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-32 max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      {/* Cart Header */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        🛒 Your Cart
      </h1>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (
        <p className="text-center text-4xl text-gray-500">
          Your cart is empty. Start adding some delicious items! 
        </p>
      ) : (
        <>
          {/* Items List */}
         <ItemList items={cartItems} isCartPage={true} />

          {/* Clear Cart Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300"
            >
              ❌ Clear Cart
            </button>
          </div>

          {/* Cart Summary */}
          <div className="flex justify-between items-center border-t pt-4 mt-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Total: ₹{total / 100}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
