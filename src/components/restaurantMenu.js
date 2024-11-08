import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resData, setResData] = useState({});
  const [cardItems, setCarditems] = useState([]);
  const { resId } = useParams();
  console.log("rsid idd", resId)
  const fetchData = async () => {
    const response = await fetch(
        MENU_API + resId
    );
    const json = await response.json();
    console.log("json data", json);
    setResData(json?.data?.cards[2]?.card?.card?.info);
    setCarditems(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.carousel
    );
    console.log("card itmes", cardItems);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return resData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="menu">
        <ul>
          <h1> {resData?.name}</h1>
          <h3>{resData?.areaName}</h3>
          <p>{resData?.cuisines?.join(", ")}</p>
        </ul>
      </div>
      <div className="itemCard">
        <ul>
          {cardItems?.map((item) => (
            <li key={item.dish.info.id}>
              {item.dish.info.name} : RS:{" "}
              {item.dish.info.defaultPrice / 100 ||
                item.dish.info?.variantsV2?.pricingModels?.[0]?.price ||
                100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
