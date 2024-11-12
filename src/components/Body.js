import React, { useEffect, useState } from "react";
import RestaurantCard from "./Restaurant";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function Body() {
  const [newArray, setNewArray] = useState([]);
  const [filter, setFilter] = useState([]); // Save the original unfiltered data
  const [search, setSearch] = useState("");

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty array means it will only run once on mount

  const fetchData = async () => {
    try {
      // Fetch the data from the API
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      // Parse the response data as JSON
      const data = await response.json();
      console.log("data", data);

      // Assuming the restaurant list is in data.data.restaurants
      const restaurantList =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log("hii", restaurantList);

      // Set both the newArray (filtered results) and filter (original unfiltered data)
      setNewArray(restaurantList);
      setFilter(restaurantList); // Save the original data for future filtering
      console.log("Fetched restaurants:", data);
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error("Error fetching data:", error);
    }
  };

  return newArray.length === 0 ? (
    <div>
      <Shimmer />
    </div>
  ) : (
    <div className="filter">
      <div className="search m-4 p-4  flex justify-center ">
        <input
          className="search m-4 p-4 rounded-2xl border-show outline"
          placeholder="search food"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="flex">
          <button
            className="search m-4 p-4 items-center rounded-2xl bg-blue-500 text-white"
            onClick={() => {
              // Filter the original data (filter) by search term
              const filteredData = filter.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(search.toLowerCase())
              );
              setNewArray(filteredData); // Update newArray with the filtered results
            }}
            // className="search-btn"
          >
            search
          </button>
        </div>
      </div>

      <button
        onClick={() => {
          // Filter based on rating but use the original data (filter) for filtering
          const filterRes = filter.filter(
            (restaurant) => restaurant?.info?.avgRating > 4.7
          );
          setNewArray(filterRes); // Update newArray with the filtered results
        }}
        className="filter-btn"
      >
        Filter High Rated
      </button>

      <div className="flex flex-wrap ">
        {newArray.map((restaurant) => (
          <Link to={`/restaurant/${restaurant.info.id}`}>
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
