import { usePrice } from "../../PriceContext";
import { useCart } from "../../CartContext";
import { Link } from "react-router-dom";

function Cart() {
    const { cartItems, addToCart, removeFromCart, clearCart } = useCart();
    const { totalPrice, clearPrice } = usePrice();

    const handleAddToCart = (item) => {
        addToCart(item);
      };
  
    const handleRemoveFromCart = (item) => {
        removeFromCart(item);
    };

    const handleClearCart = () => {
        clearCart();
        clearPrice();
    };

    return(<>
    <div id="cart">
            <h1>Cart</h1>
            <div id="cart-content">
                {cartItems.length === 0 ? <h2>Empty</h2> :
                <ul>{cartItems.map((item) => 
                <li key={item.name} className="cart-list-item">
                    <span>{item.quantity} x </span>
                    {item.name} {item.price} € 
                <div className="item-buttons"><button onClick={() => handleRemoveFromCart(item)}>-</button>
                <button onClick={() => handleAddToCart(item)}>+</button></div></li>)}</ul>}
            </div>
            <div id="cart-bottom">
                <h3>Total: {totalPrice} €</h3>
                <div id="cart-buttons">
                    <button className="regular-button" value='clear' onClick={handleClearCart}>Clear cart</button>
                    {totalPrice > 0 ? 
                    <Link to='/shop/order'><button className="green-button">Proceed to order</button></Link> 
                    : <button disabled className="green-button button-disabled">Proceed to order</button>}
                </div>
            </div>
    </div></>)
}

export default Cart;