import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isOpen, handleToggle }) => {
  const onToggle = () => {
    handleToggle();
  };

  return (
    <div className="w-full sm:w-8/12 md:w-6/12 mx-auto my-6">
      {/* Category Card */}
      <div className=" opacity-65
        bg-gradient-to-r from-purple-600/80 to-blue-600/80
        rounded-xl
        shadow-lg
        hover:shadow-2xl
        transition-all duration-300
        cursor-pointer
        backdrop-blur-sm
      ">
        {/* Header */}
        <div
          className="flex justify-between items-center p-5"
          onClick={onToggle}
        >
          {/* Title */}
          <span className="font-bold text-lg md:text-xl text-white tracking-wide">
            {data.title} ({data.itemCards?.length || 0})
          </span>

          {/* Arrow Icon */}
          <span
            className={`text-white transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </div>

        {/* Item List */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-5 bg-white rounded-b-xl">
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
