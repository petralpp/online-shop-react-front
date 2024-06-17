import { useContext } from "react";
import { TotalContext, CartContext } from "../Contexts";

function RemoveButton(props) {
    const { total, setTotal } = useContext(TotalContext);
    const { inCart, setInCart } = useContext(CartContext);

    const removeItem = (item) => {
        const itemFound = inCart.find((cartItem) => cartItem.name === item.name);
            if (itemFound) {
                setInCart(
                    inCart.map((cartItem) =>
                        cartItem.name === item.name
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                    ).filter(cartItem => cartItem.quantity > 0)
                );
                const roundedTotal = Math.round((total-item.price) * 100) / 100;
                setTotal(roundedTotal);  
            }
    }

    return (
        <button value="remove" onClick={() => removeItem(props.item)}>-</button>
    );
}

export default RemoveButton;