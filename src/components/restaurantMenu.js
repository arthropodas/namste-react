import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuHook from "../utils/hooks/useRestaurantMenuHook";

import RestaurantCard from "./Restaurant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(1);

  const resInfo = useRestaurantMenuHook(resId);

  const { name, areaName, cuisines } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];
  console.log("item cards", itemCards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (e) =>
        e.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // const categories = resInfo
  // console.log("res info", resInfo)
  console.log("test.........categories", categories);
  if ((!resInfo)||(!categories)) {
    return <Shimmer />;
  }

  return (
    <div className="m-auto justify-center p-10 text-center">
      <h1 className="font-bold text-2xl">{name}</h1>
      <h3 className="font-semibold">{areaName}</h3>
      <p>{cuisines?.join(", ")}</p>

      <div className="justify-self-auto">
        {categories?.map((resCategory, index) => (
          <RestaurantCategory
            key={index + "12"}
            categoryData={d}
           
            setShowIndex = { setShowIndex(showIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
