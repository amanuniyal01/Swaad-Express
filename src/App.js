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
import { Provider } from 'react-redux';
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";









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
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
                <div className="app">

                    <Header />
                    <Outlet />
                    <Footer/>
                </div>
            </UserContext.Provider>
        </Provider>

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
                path: "/login",
                element: <LoginPage />
            },
            {
                path:"/cart",
                element:<Cart/>
            }
          
        ], errorElement: <Error />


    },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);