import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isOpen, handleToggle }) => {
  return (
    <div className="w-full sm:w-8/12 md:w-6/12 mx-auto my-6">

      <div
        className="
          bg-white 
          border border-gray-200 
          rounded-xl 
          shadow-sm 
          hover:shadow-md 
          transition-shadow 
          cursor-pointer
        "
      >
        {/* Header */}
        <div
          className="flex justify-between items-center px-5 py-4"
          onClick={handleToggle}
        >
          <span className="font-semibold text-lg md:text-xl text-gray-800">
            {data.title}{" "}
            <span className="text-gray-500 text-sm">
              ({data.itemCards?.length || 0})
            </span>
          </span>

          {/* Arrow Icon */}
          <span
            className={`text-gray-600 text-xl transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </div>

     
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-[1500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 py-4 bg-gray-50 rounded-b-xl">
            <ItemList
              items={data.itemCards || []}
              className="text-gray-700 font-medium tracking-wide"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
