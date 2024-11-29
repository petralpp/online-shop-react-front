import { useState } from "react";
//import { useMediaQuery } from "react-responsive";
import ProductCard from "./ProductCard.jsx";
import { products } from "../../../js/productData.js";
import { categories } from "../../../js/categories.js";
import { useCart } from "../../../CartContext.js";
import { usePrice } from "../../../PriceContext.js";
import SidebarDesktop from "./SidebarDesktop.jsx";
import SidebarMobile from "./SidebarMobile.jsx";
import Modal from "../Modal.jsx";
import Cart from "../Cart.jsx";


function ProductPage() {
    const [selectedCategory, setCategory] = useState(products['vegetables']);
    const { cartItems } = useCart();
    const { totalPrice } = usePrice();
    
    const [currentHeader, setHeader] = useState('Vegetables');
    //const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });
    const [modal, setModal] = useState(false);

    function handleDataFromChild(id) {
        const newHeader = categories.find((header) => header.id === id);
        
        setHeader(newHeader.label);
        setCategory(products[id]);
      }
    
    return(
    <div id="shop-wrapper">
        {window.innerWidth > 850 ? <SidebarDesktop sendDataToParent={handleDataFromChild}/> 
        : <div  id="category-bar"><SidebarMobile sendDataToParent={handleDataFromChild} />
        <p>Items in cart: {cartItems.length} Total: {totalPrice}</p>
        <button id="cart-button" className="green-button" onClick={() => setModal(true)}>Cart</button> 
        <Modal
            openModal={modal}
            closeModal={() => setModal(false)}
            >
            <Cart />
        </Modal>
      </div>}
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