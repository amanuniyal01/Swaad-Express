import RestaurantCard, { showpromotedCard } from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Starter from "./Starter";
import useOnlineStatus from "../utils/useOnlineStatus";
import { WifiOff } from "lucide-react";



const Body = () => {


    const [RestaurantList, setRestaurantList] = useState([])
    const [filterRestaurant, setfilterRestaurant] = useState([])
    const [SearchText, setSearchText] = useState("");
    const RestaurantPromoted = showpromotedCard(RestaurantCard);

    useEffect(() => {
        setTimeout(() => {
            setRestaurantList(resList);
            setfilterRestaurant(resList);

        }, 500); // 500ms delay to "simulate" API load
    }, []);

    const status = useOnlineStatus();
    if (status === false) {
        return (
            <div className="offline flex content-center items-center flex-col mt-[300px]">
                <WifiOff size={60} className="wifi-icon h-[100px] w-[100px]  items-center" />
                <h1 >Offline🛑</h1>
                <p className="text-[20px]">Sorry, it seems that you are currently offline</p>
            </div>


        )
    }


    return RestaurantList.length === 0 ? <Shimmer /> :

        (

            <div className="body pt-[50px]">
                <Starter />

                <div className="filter mb-4 flex items-center justify-center gap-[50px]">
                    <input
                        className=" search-text flex items-center justify-center w-[420px] cursor-pointer border-none text-[1.4rem] h-[40px] rounded-md shadow-[2px_2px_2px_2px_rgba(35,30,30,0.507)] p-[25px] hover:bg-gray-100
"
                        type="text"
                        placeholder="🔍 Search restaurants, cuisines..."

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


                    <button className="filter-btn text-white cursor-pointer p-[10px] text-[20px] rounded-[6px] text-center m-[10px] bg-purple-400 font-bold hover:text-white hover:bg-[rgba(6,18,245,0.6)] " onClick={() => {
                        let filterData = RestaurantList.filter((res) => res.info.avgRating > 4.2);
                        setfilterRestaurant(filterData);

                    }}

                    >Popular Picks</button>
                </div>
                <div className="res-container flex items-center justify-evenly  flex-wrap w-full ">
                    {filterRestaurant.map((restaurant) => (
                        <Link className="card-link" key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
                            {restaurant.info.promoted ? (<RestaurantPromoted resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)}



                        </Link>

                    ))


                    }



                </div>
            </div>

        );
};
export default Body;

