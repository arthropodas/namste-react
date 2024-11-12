import PropTypes from 'prop-types'; // Import PropTypes
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("resdata print", resData);
  
  return (
    <div className="m-4 p-4 bg-slate-100 w-[250px] rounded-lg hover:scale-110 duration-300">
      {console.log("resdata from restaurant.....", resData?.info?.name)}
      <img
        src={CDN_URL + resData?.info?.cloudinaryImageId}
        alt="Restaurant"
        className="rounded-lg w-64"
      />

      <div style={{ padding: "10px" }}>
        <h4 className="text-2xl font-semibold">{resData?.info?.name}</h4>
        <h5>{resData?.info?.areaName}</h5>
        <h5>{resData?.info?.locality}</h5>
        <h5>{resData?.info?.costForTwo}</h5>
        <h4>Rating: {resData?.info?.avgRating}</h4>
        <p>{resData?.info?.cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

// PropTypes validation
RestaurantCard.propTypes = {
  resData: PropTypes.shape({
    info: PropTypes.shape({
      name: PropTypes.string.isRequired,
      areaName: PropTypes.string,
      locality: PropTypes.string,
      costForTwo: PropTypes.string,
      avgRating: PropTypes.number,
      cloudinaryImageId: PropTypes.string.isRequired, // Don't forget to include this if it's used
      cuisines: PropTypes.arrayOf(PropTypes.string).isRequired, // Include cuisines as an array of strings
    }).isRequired, // Marking info as required
  }).isRequired, // Marking resData as required
};

export default RestaurantCard;
