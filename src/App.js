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
import { Provider } from "react-redux";
// Lazy load the Grocery component
const Grocery = lazy(() => import("./components/Grocery"));

import appStore from "./utils/redux/appStore";
import Cart from "./components/cart";
const AppLayout = () => {
  return (
    <div className="app">
      <Provider store={appStore}>
        <Header />
        <Outlet />
 
      </Provider>
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
      { path: "/cart", element: <Cart /> },
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
