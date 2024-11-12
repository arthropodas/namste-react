import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuHook from "../utils/hooks/useRestaurantMenuHook";
import ItemList from "./itemList";
import RestaurantCard from "./Restaurant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenuHook(resId);

  const { name, areaName, cuisines } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];
  console.log("item cards", itemCards);
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((e)=>(e.card.card["@type"] =='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'))
  // const categories = resInfo
  // console.log("res info", resInfo)
  console.log("test.........categories", categories)
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

      <div className="flex flex-wrap columns-4 justify-center">

          {/* {itemCards?.map((item) => (
            <ItemList itemCards={item} />
          ))} */}
          {
categories?.map((resCategory)=><RestaurantCategory resCategory={resCategory?.card?.card}/>)
          }
        </div>
      </div>
 
  );
};



export default RestaurantMenu;
