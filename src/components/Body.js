import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Starter from "./Starter";

const Body = () => {


    const [RestaurantList, setRestaurantList] = useState([])
    const [filterRestaurant, setfilterRestaurant] = useState([])
    const [SearchText, setSearchText] = useState("")

    useEffect(() => {
        setTimeout(() => {
            setRestaurantList(resList);
            setfilterRestaurant(resList);

        }, 500); // 500ms delay to "simulate" API load
    }, []);


    return RestaurantList.length === 0 ? <Shimmer /> :

        (

            <div className="body">
                <Starter />

                <div className="filter">
                    <input
                        className="search-text"
                        type="text"
                        placeholder="search for restaurant"
                        value={SearchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                const filterRestaurant = RestaurantList.filter((res) =>
                                    res.info.name.toLowerCase().includes(SearchText.toLowerCase())
                                );
                                setfilterRestaurant(filterRestaurant);
                            }
                        }}
                    />

                    <button className="filter-btn" onClick={() => {
                        let filterData = RestaurantList.filter((res) => res.info.avgRating > 4.2);
                        setfilterRestaurant(filterData);

                    }}

                    >Popular Picks</button>
                </div>
                <div className="res-container">
                    {filterRestaurant.map((restaurant) => (
                        <Link className="card-link" key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}><RestaurantCard resData={restaurant} /></Link>

                    ))


                    }



                </div>
            </div>

        );
};
export default Body;

