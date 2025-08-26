import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  if (!resData) {
    return <div className="res-card">No Data Available</div>;
  }

  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="res-details">
        <h3 className="res-name">{name}</h3>
        <p className="res-cuisines">{cuisines.join(", ")}</p>
        <div className="res-info">
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
