import { useCart } from '../../../contexts/CartContext';

function ProductCard({item}) {
    const { addToCart, removeFromCart } = useCart();

    const handleAddToCart = () => {
        addToCart(item);
    };

    const handleRemoveFromCart = () => {
        removeFromCart(item);
    }

    return (
        <div className="product-card">
            <div className="product-info">
                <p><b>{item.name}</b></p>
                <p><i>{item.package}</i></p>
            </div>
            <div>
                <img src={item.icon} alt="product"></img>
            </div>
            <div>
                <p>{item.price} €</p>
            </div>
            <div>
                {window.innerWidth > 850 ?
                    <div>
                        <button className="regular-button" onClick={handleRemoveFromCart}>Remove</button>
                        <button className="green-button" onClick={handleAddToCart}>Add to cart</button>
                    </div>
                    : <div>
                        <button className="regular-button" onClick={handleRemoveFromCart}>-</button>
                        <button className="green-button" onClick={handleAddToCart}>+</button>
                    </div>}
            </div>
        </div>
    );
  }
  
  export default ProductCard;