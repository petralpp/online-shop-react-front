import { useCart } from '../../../CartContext';

function ProductCard(item) {
    const { addToCart, removeFromCart } = useCart();

    const handleAddToCart = () => {
        console.log(item);
        addToCart(item);
    };

    const handleRemoveFromCart = () => {
        removeFromCart(item);
    }

    return (
        <div className='product-card'>
            <div className="product-info">
                <p><b>{item.name}</b></p>
                <p><i>{item.package}</i></p>
            </div>
            <img src={'/images/' + item.img + '.png'}  alt='product'></img>
            <p>{item.price} €</p>
            <div>
                <button className="regular-button" onClick={handleRemoveFromCart}>Remove</button>
                <button className="green-button" onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>
    );
  }
  
  export default ProductCard;