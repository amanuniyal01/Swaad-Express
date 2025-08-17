import { mockMenuData } from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";




const RestaurantMenu = () => {

    const [Menu, setMenu] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setMenu(mockMenuData);

        }, 500);

    }, []);
    const { resId } = useParams();
    const menu = mockMenuData[resId];
    const { restaurantName, categories } = menu


    return menu === null ? (<Shimmer />

    ) :


        (


            <div className="menu">


                <h1>{restaurantName}</h1>
                {categories.map((category, index) => (
                    <div key={index}>
                        <h2><span className="categ">{category.title}</span></h2>
                        <ul>
                            {category.itemCards.map((item) => (
                                <li className="list-menu" key={item.id}>
                                    <span className="name-item">{item.name}</span> =       ₹{item.price / 100}
                                    <br />
                                    <p className="para-item">{item.description}</p><br />


                                    <br />
                                    


                                </li>

                            ))}
                        </ul>
                       
                     
                    </div>
                ))}
            </div>
        )
}
export default RestaurantMenu;