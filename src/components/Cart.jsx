import { useContext } from "react";
import { TotalContext, CartContext } from "../Contexts";
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';
import './Cart.css';

function Cart() {
    const { inCart, setInCart } = useContext(CartContext);
    const { total, setTotal } = useContext(TotalContext);

    const clearCart = () => {
        setInCart([]);
        setTotal(0);
    }

    return(
    <div className="cartDiv">
            <h1>Shopping Cart</h1>
            {inCart.length === 0 ? <h2>Empty</h2> :
            <ul>{inCart.map((item) => 
            <li key={item.name}>{item.name} {item.price} € <span className="quantity">x {item.quantity}</span>
            <RemoveButton item={item}/><AddButton item={item}/></li>)}</ul>}
            <h3>Total: {total} €</h3>
            <button value='empty' onClick={clearCart}>Clear cart</button>
    </div>)
}

export default Cart;