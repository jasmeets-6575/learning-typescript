import { useContext } from "react";
import CartContext from "../context/Cartprovider";
import { UseCartContextType } from "../context/Cartprovider";

const useCart = (): UseCartContextType => {
  return useContext(CartContext);
};

export default useCart;
