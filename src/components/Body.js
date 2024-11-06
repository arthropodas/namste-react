import React, { useState } from "react";
import RestaurantCard from "./Restaurant";
import resList from "../utils/mockData";
function Body() {
  const [newArray, setNewArray] = useState(resList);
  return (
    <div>
      <div className="search">
        <input placeholder="search food" />
        <button className="search-btn">search</button>
      </div>
      <button onClick={
        ()=>{
           const filterRes = newArray.filter((restaurant)=>(restaurant.info.avgRating>4.7)) 
           setNewArray(filterRes)
        }
      } className="filter-btn">filter high rated</button>

      <div className="res-container">
        {newArray.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
