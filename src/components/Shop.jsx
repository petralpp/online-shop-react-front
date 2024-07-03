import { useState } from "react";
import { TotalContext, CartContext } from "../Contexts.js";
import ProductSelection from "./ProductSelection.jsx";
import Cart from "./Cart.jsx";
import { categories, products } from "../js/products.js";
import './Products.css'

function Shop() {
    const [selectedCategory, setCategory] = useState(products['vegetables']);
    const [total, setTotal] = useState(0);
    const [inCart, setInCart] = useState([]);

    const handleClick = (id) => {
        setCategory(products[id]);
    }
    
    return(
    <div className="wrapper">
        <div className="categories">
            {categories.map((category) => 
            <div key={category.id} onClick={() => handleClick(category.id)}>{category.label}</div>)}
        </div>
        <TotalContext.Provider value={ {total, setTotal} }>
        <CartContext.Provider value={ {inCart, setInCart} }>
        <div className="productSelection">
            { <ProductSelection show={selectedCategory}/> }
        </div>
        <Cart />
        </CartContext.Provider>
        </TotalContext.Provider>
    </div>);
}

export default Shop;