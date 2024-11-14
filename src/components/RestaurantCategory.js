import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { MdOutlineSouth } from "react-icons/md";
import { MdNorth } from "react-icons/md";
import { CDN_URL } from "../utils/constants";
import ItemList from "./ItemList";

function RestaurantCategory({ categoryData, showIndex, setShowIndex}) {
  const handleClick=()=>{
    setShowIndex(!showIndex)
  }


  console.log("rescategorry", categoryData);
  console.log("checking....", categoryData?.itemCards[0]);
  const itemList = categoryData?.itemCards;
  if (!itemList) {
    return <Shimmer />;
  }
  return (
    <div>
      <div className="w-6/12 m-auto my-4 bg-gray-60 shadow-lg p-4"  >
        <div className="flex justify-between hover:cursor-pointer"onClick={handleClick}>
          <span className="font-bold text-lg">
            {categoryData.title} ({categoryData.title.length})
          </span>
          <span className="relative top-0 right-0">
            {showIndex ? <MdNorth /> : <MdOutlineSouth />}
          </span>
        </div>
        {showIndex ? (
          itemList.map((item) => (
            <ItemList key={item.card.info.id} item={item} />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default RestaurantCategory;
