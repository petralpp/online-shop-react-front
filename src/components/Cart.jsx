import { useContext } from "react";
import { TotalContext, CartContext } from "./ShopContainer.jsx";
import './Cart.css';

function Cart() {
    const { inCart } = useContext(CartContext);
    const { total } = useContext(TotalContext);

    return(
    <div className="cartDiv">
        <h1>Shopping Cart</h1>
        {inCart.length === 0 ? <h2>Empty</h2> :
        <ul>{inCart.map((item) => <li key={item.name}>{item.name} {item.price} € <span className="quantity">x {item.quantity}</span></li>)}</ul>}
        <h3>Total: {total} €</h3>
    </div>)
}

export default Cart;