import { useContext } from "react";
import { TotalContext, CartContext } from "../Contexts";
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';
import OrderButton from "./OrderButton";
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
            <h1>Cart</h1>
            {inCart.length === 0 ? <h2>Empty</h2> :
            <ul>{inCart.map((item) => 
            <li key={item.name}><span className="quantity">{item.quantity} x</span> {item.name} {item.price} € 
            <div><RemoveButton item={item}/><AddButton item={item}/></div></li>)}</ul>}
            <h3>Total: {total} €</h3>
            <button value='empty' onClick={clearCart}>Clear cart</button>
            {total > 0 ? <OrderButton active="true"/> : <OrderButton active="false"/>}
    </div>)
}

export default Cart;