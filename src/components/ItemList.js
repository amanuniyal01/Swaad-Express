const ItemList = ({ items }) => {
  return (
    <div className="max-w-3xl mx-auto">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-6 bg-gray-100 mb-4 border rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300"
        >
          {/* Flex container for content and button */}
          <div className="flex  justify-between items-center">
            <div className="flex-1 pr-4">
              <h3 className="text-[22px] font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
                {item.name}
              </h3>
              <p className="text-[22px] text-gray-700 font-[200] leading-relaxed mb-2">
                {item.description}
              </p>
              <p className="text-[20px] font-semibold text-green-600">
                ₹{item.price / 100}
              </p>
            </div>

            <button className="bg-blue-500 text-white text-[18px] px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
