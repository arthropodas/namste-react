

import React from "react";
import { CDN_URL } from "../utils/constants";

function ItemList({ item }) {
  const { price, description, name, category, imageId, defaultPrice } =
    item.card.info;
  console.log(item, "<<<<<<<<<<<,,");
  return (
    <div className="m-2 flex justify-between shadow-lg shadow-slate-400 p-5 items-center">
      <div className="pr-3">
        <h1 className="text-left text-zinc-500 font-semibold">{name}</h1>
        <h1 className="text-start ">₹ - {price / 100 || defaultPrice / 100}</h1>

        <p className=" text-left font-sans text-sm">{description}</p>
      </div>
      <div>
        <div className="bg-gray-700 round border-r-4">
          <button className="absolute pr-4 bg-gray-700 rounded text-white" onClick={()=>{

          }}>
            add +
          </button>
        </div>
        <div className="w-36 h-36">
          <img src={CDN_URL + imageId} className="w-48" />
        </div>
      </div>
    </div>
  );
}

export default ItemList;
