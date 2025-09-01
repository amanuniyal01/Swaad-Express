import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Reviews from "./components/Reviews";
import LoginPage from "./components/LoginPage";
import UserContext from "./utils/usercontext";







const AppLayout = () => {
    const [userName, setuserName] = useState();

    //Authentication
    useEffect(() => {

        // Make an ApI call and send username
        const data = {
            name: "Aman Uniyal"
        };
        setuserName(data.name)

    }, [])


    return (
        <UserContext.Provider value={{ loggedInUser: userName,setuserName }}>
            <div className="app">

                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>

    )


}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "",
                element: <Body />

            },

            {
                path: "/about",
                element: <About />,

            },
            {
                path: "/contact",
                element: <Contact />,

            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/reviews",
                element: <Reviews />
            },
            {
                path:"/login",
                element:<LoginPage/>
            }

        ], errorElement: <Error />


    },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);