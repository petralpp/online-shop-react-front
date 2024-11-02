import { useContext } from "react";
import { TotalContext, CartContext } from "../../Contexts";
import { Link } from "react-router-dom";
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';

function Cart() {
    const { inCart, setInCart } = useContext(CartContext);
    const { total, setTotal } = useContext(TotalContext);

    const handleClearCart = () => {
        setInCart([]);
        setTotal(0);
    }

    return(
    <div id="cart" className="hidden">
            <h1>Cart</h1>
            <div id="cart-content" className="hidden">
                {inCart.length === 0 ? <h2>Empty</h2> :
                <ul>{inCart.map((item) => 
                <li key={item.name} class="cart-list-item">
                    <span>{item.quantity} x </span>
                    {item.name} {item.price} € 
                <div><RemoveButton item={item}/><AddButton item={item}/></div></li>)}</ul>}
            </div>
            <div id="cart-bottom">
                <h3>Total: {total} €</h3>
                <div id="cart-buttons">
                    <button className="regular-button" value='clear' onClick={handleClearCart}>Clear cart</button>
                    {total > 0 ? 
                    <Link to='/shop/order'><button className="green-button">Proceed to order</button></Link> 
                    : <button disabled className="green-button button-disabled">Proceed to order</button>}
                </div>
            </div>
    </div>)
}

export default Cart;