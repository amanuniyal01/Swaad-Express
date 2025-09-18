import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Reviews from "./components/Reviews";
import LoginPage from "./components/LoginPage";
import Cart from "./components/Cart";

import UserContext from "./utils/usercontext";
import appStore from "./utils/appStore";
import { ThemeProvider } from "./utils/ThemeContext";

const AppLayout = () => {
  const [userName, setuserName] = useState("");

  useEffect(() => {
    setuserName("Aman Uniyal");
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider>
        <AppLayout />
      </ThemeProvider>
    ),
    children: [
      { path: "", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/reviews", element: <Reviews /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
