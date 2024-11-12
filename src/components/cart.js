import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((store)=>store.cart.items)
  console.log("cart", cart)

  return <div className="text-center m-10 p-10">
    <h1 className="text-xl font-bold">
        cart
    </h1>
  </div>;
};

export default Cart;
