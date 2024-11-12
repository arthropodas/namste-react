import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cardSlice";

const ItemList = (props) => {
  const { itemCards } = props;
  const dispatch = useDispatch()
  const handleAdd=()=>{
   dispatch(addItem("add"))
  }
  console.log("inside the item list", itemCards);
  return (
    <div className="w-auto p-4 m-6 r- bg-green-200 border border-blue-400 flex justify-center items-center">
      {itemCards?.card.info.name} RS : {itemCards.card.info.defaultPrice / 100 || itemCards.card.info.price/100}
      <button onClick={handleAdd}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 border border-blue-700 rounded">
        add +
      </button>
    </div>
  );
};

export default ItemList;
