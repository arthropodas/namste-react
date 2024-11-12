import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Compiler from "../Compiler";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/restaurantMenu";
import CompilerAdmin from "./components/CompilerAdmin";

// Lazy load the Grocery component
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header /> 
       <Outlet />
      {/* <Compiler/>
      <CompilerAdmin/> */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <div>
                <h1>Loading...</h1>
              </div>
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
