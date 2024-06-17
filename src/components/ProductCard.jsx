import { useContext } from 'react';
import { TotalContext, CartContext } from "./ShopContainer.jsx";
import './Products.css';

function ProductCard(props) {
    const { total, setTotal } = useContext(TotalContext);
    const {inCart, setInCart} = useContext(CartContext);

    const addItem = (item) => {
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
    };

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
        <div className='productCard'>
            <h2>{props.name}</h2>
            <p>{props.price} €</p>
            <div>
            <button value='remove' onClick={() => removeItem(props)}>-</button>
            <button value='add' onClick={() => addItem(props)}>+</button>
            </div>
        </div>
    );
  }
  
  export default ProductCard;