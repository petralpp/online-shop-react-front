import { Link } from "react-router-dom";

function OrderButton(props) {
    return(props.active === "true" ? 
        <Link to='/shop/order'><button>Proceed to cart</button></Link> 
        : <button disabled>Proceed to cart</button>);
}

export default OrderButton;