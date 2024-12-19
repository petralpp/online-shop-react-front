import { useState } from "react";
import ProductCard from "./ProductCard.jsx";
import { products } from "../../../js/productData.js";
import { categories } from "../../../js/categories.js";
import { useCart } from "../../../contexts/CartContext.js";
import { usePrice } from "../../../contexts/PriceContext.js";
import SidebarDesktop from "./SidebarDesktop.jsx";
import SidebarMobile from "./SidebarMobile.jsx";
import Modal from "../Modal.jsx";
import Cart from "../Cart.jsx";
import useWindowResizeThreshold from "../../../js/windowResize.js";
import { CartIcon } from "../../Icons.js";

export const MAX_TABLET_WIDTH = 850;

function ProductPage() {
    const [selectedCategory, setCategory] = useState(products['vegetables']);
    const { cartItems } = useCart();
    const { totalPrice } = usePrice();
    const isTabletSize = useWindowResizeThreshold(MAX_TABLET_WIDTH);
    
    const [currentHeader, setHeader] = useState('Vegetables');
    const [modal, setModal] = useState(false);

    function handleDataFromChild(id) {
        const newHeader = categories.find((header) => header.id === id);
        
        setHeader(newHeader.label);
        setCategory(products[id]);
      }
    
    return(
    <div id="shop-wrapper">
        {isTabletSize ? 
        <div id="category-bar"><SidebarMobile sendDataToParent={handleDataFromChild} />
            <button className="cart-button" onClick={() => setModal(true)}>
            <img src={CartIcon} width={30} height={30} alt="cart"></img>
            </button>
            <Modal
                openModal={modal}
                closeModal={() => setModal(false)}
                >
                <Cart />
            </Modal>
            <div id="bar-cart-info"><p>Items in cart: {cartItems.length}</p><p> Total: {totalPrice} €</p></div>
        </div> : <SidebarDesktop sendDataToParent={handleDataFromChild}/> }
        <div id="product-display">
            <h1>{currentHeader}</h1>
            <div id="product-list">
                {selectedCategory.map((item) =>
                    <ProductCard key={item.name} item={item}/>
                )}
            </div>
        </div>
    </div>);
}

export default ProductPage;