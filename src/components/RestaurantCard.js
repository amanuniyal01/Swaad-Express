import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  if (!resData) {
    return <div className="res-card">No Data Available</div>;
  }

  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
    resData?.info;

  return (
    <div className="res-card flex-wrap contain-content w-[250px] sm:w-64 bg-white m-[10px] rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <img
        className="res-logo h-[180px] w-full object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="res-details p-[15px]">
        <h3 className="res-name text-lg font-bold text-gray-900 truncate">{name}</h3>
        <p className="res-cuisines text-sm text-gray-600 line-clamp-1 mb-[10px]">{cuisines.join(", ")}</p>
        <div className="res-info flex  items-center justify-between">
          <span
            className={`res-rating ${
              avgRating >= 4 ? "good" : avgRating >= 3 ? "average" : "bad"
            }`}
          >
            ⭐ {avgRating}
          </span>
          <span className="res-cost">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
