import React from "react";
import RestaurantCard from "./Restaurant";
import resList from "../utils/mockData";
function Body() {
  return (
    <div>
      <div className="search">
        <input placeholder="search food" />
        <button className="search-btn">search</button>
      </div>
      

      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
