import { createContext, useReducer } from "react";
import context from "react-bootstrap/esm/AccordionContext";

export const CartContext = createContext();

export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const tempState = state.filter(
          (prod) => action.payload._id === prod._id
        );
        if (tempState.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
      case "INCREASE":
        const tempstate1 = state.map((prod) => {
          if (prod._id === action.payload._id) {
            return { ...prod, qty: prod.qty + 1 };
          } else {
            return prod;
          }
        });
        return tempstate1;
      case "DECREASE":
        const tempstate2 = state.map((prod) => {
          if (prod._id === action.payload._id) {
            return { ...prod, qty: prod.qty - 1 };
          } else {
            return prod;
          }
        });
        return tempstate2;
      case "REMOVE":
        const tempstate3 = state.filter(
          (prod) => prod._id !== action.payload._id
        );
        return tempstate3;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <CartContext.Provider value={info}>{props.children}</CartContext.Provider>
  );
};