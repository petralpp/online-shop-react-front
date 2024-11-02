import { createContext, useState, useContext } from "react";
import { usePrice } from "./PriceContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { increasePrice, decreasePrice } = usePrice();

  const addToCart = (item) => {
    const itemFound = cartItems.find((cartItem) => cartItem.name === item.name);
    //const itemFound = cartItems.includes(item);

        if (itemFound) {
            setCartItems(
                cartItems.map((cartItem) =>
                cartItem.name === item.name
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
                )
            );
            } else {
                setCartItems([...cartItems, { ...item, quantity: 1 }]);
            }
            increasePrice(item);
  };

  const removeFromCart = (item) => {
    const itemFound = cartItems.find((cartItem) => cartItem.name === item.name);
    //const itemFound = cartItems.includes(item);

      if (itemFound) {
          setCartItems(
              cartItems.map((cartItem) =>
                  cartItem.name === item.name
                  ? { ...cartItem, quantity: cartItem.quantity - 1 }
                  : cartItem
              ).filter(cartItem => cartItem.quantity > 0)
          );
          decreasePrice(item);
      }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartContext;