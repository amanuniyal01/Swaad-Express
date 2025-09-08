import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isOpen, handleToggle }) => {

  const onToggle=()=>{
    handleToggle();
  }
  return (
    <div className=" w-full sm:w-8/12 md:w-6/12 mx-auto my-4 shadow-lg">
      {/* Category Card */}
      <div className="bg-gray-200 rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-shadow duration-300 cursor-pointer">
        <div
          className="flex justify-between items-center p-4"
          onClick={onToggle}
        >
          {/* Title */}
          <span className="font-semibold text-xl text-gray-800 tracking-wide">
            {data.title} ({data.itemCards?.length || 0})
          </span>
          {/* Arrow */}
          <span
            className={`transform transition-transform duration-300 text-gray-600 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ⬇️
          </span>
        </div>

        {/* Toggle item list */}
        {isOpen && (
          <div className="p-4 border-t border-gray-300 bg-white rounded-b-xl">
            <ItemList
              items={data.itemCards || []}
              className="text-gray-700 font-medium tracking-wide"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
