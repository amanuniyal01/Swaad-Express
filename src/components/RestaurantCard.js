import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } = resData?.info;


    if (!resData) {
        return <div className="res-card">No Data Available</div>;
    }

    return (
        
        <div className="res-card">
            <img
                className="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4 className="star">{avgRating}⭐</h4>
            <h3>{costForTwo}</h3>
            <h4>{cuisines.join(",")}</h4>


        </div>
    );
};
export default RestaurantCard;