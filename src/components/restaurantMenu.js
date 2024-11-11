import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuHook from "../utils/hooks/useRestaurantMenuHook";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenuHook(resId);
  console.log("res info", resInfo);
  const { name, areaName, cuisines } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];
  console.log("item cards", itemCards);
  // Add resId as dependency so it refetches when the resId changes

  // Return loading state (shimmer) while data is being fetched
  if (!resInfo) {
    return <Shimmer />;
  }

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
            <li key={item.card.info.id}>
              {item?.card.info.name} RS : {item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
