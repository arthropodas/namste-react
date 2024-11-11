import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null); // Initialize with null instead of an empty object

  const { resId } = useParams();

  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response?.json();
    setResInfo(json?.data);
  };
  console.log("res info", resInfo);
  const { name, areaName, cuisines } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];
  console.log("item cards", itemCards);

  useEffect(() => {
    fetchData();
  }, [resId]); // Add resId as dependency so it refetches when the resId changes

  // Return loading state (shimmer) while data is being fetched
  if (!resInfo) {
    return <Shimmer />;
  }

  // Destructure values from resInfo once data is available

  return (
    <div>
      <div className="menu">
        <h1>{name}</h1>
        <h3>{areaName}</h3>
        <p>{cuisines?.join(", ")}</p>
      </div>

      <div className="itemCard">
        <ul>
          {itemCards?.map((item) => (
            
            <li key={item.card.info.id}>{item?.card.info.name} RS : {item.card.info.price/100}</li>
           


          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
