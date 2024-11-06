import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    console.log("resdata print", resData);
    return (
      <div className="rest-card">
        {/* {console.log("resdata from restaurant.....",resData.resData.info.name)} */}
        <img
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt="Restaurant"
          className="rest-image"
        />
  
        <div style={{ padding: "10px" }}>
          {/* {console.log("inside the restuarant cared",resData.info.name)} */}
          <h4>{resData?.info?.name}</h4>
          <h5>{resData.info.areaName}</h5>
          <h5>{resData.info.locality}</h5>
          <h5>{resData.info.costForTwo}</h5>
          <h4> rating {resData.info.avgRating}</h4>
  
          <p>{resData.info.cuisines.join(", ")}</p>
        </div>
      </div>
    );
  };

  export default RestaurantCard