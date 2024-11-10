import React from "react";
import ReactDOM from "react-dom/client";
import Compiler from "../Compiler";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/restaurantMenu";
import AboutClass from "./components/AboutClass";
import User from "./components/User";
import UserClass from "./components/UserClass";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <About/>
      <AboutClass/>
<h1>-----------------------------------------</h1>
      <User/>
      <UserClass/>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/d", element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>,
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
