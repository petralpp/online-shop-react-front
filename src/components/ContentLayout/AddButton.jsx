import { useContext } from "react";
import { TotalContext, CartContext } from "../../Contexts";

function AddButton(props) {
    const { total, setTotal } = useContext(TotalContext);
    const { inCart, setInCart } = useContext(CartContext);

    const handleClick = (item) => {
        const itemFound = inCart.find((cartItem) => cartItem.name === item.name);
        if (itemFound) {
            setInCart(
                inCart.map((cartItem) =>
                cartItem.name === item.name
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
                )
            );
            } else {
                setInCart([...inCart, { ...item, quantity: 1 }]);
            }
        const roundedTotal = Math.round((total+item.price) * 100) / 100;
        setTotal(roundedTotal);
    }
    
        return(
            <button value="add" class="add-button" onClick={() => handleClick(props.item)}>+</button>
        );
}

export default AddButton;