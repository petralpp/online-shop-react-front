import { useState, createContext } from "react";
import ProductSelection from "./ProductSelection";
import Welcome from "./Welcome";
import Cart from "./Cart";
import { categories, products } from "../js/products.js";
import './Products.css'

export const TotalContext = createContext(0);
export const CartContext = createContext([]);

function ShopContainer() {
    const [selectedCategory, setCategory] = useState([]);
    const [total, setTotal] = useState(0);
    const [inCart, setInCart] = useState([]);

    const handleClick = (id) => {
        setCategory(products[id]);
    }
    
    return(
    <div className="wrapper">
        <TotalContext.Provider value={ {total, setTotal} }>
        <div className="categories">
            {categories.map((category) => 
            <div key={category.id} onClick={() => handleClick(category.id)}>{category.label}</div>)}
        </div>
        <CartContext.Provider value={ {inCart, setInCart} }>
        <div className="productSelection">
            { selectedCategory.length === 0 ? <Welcome/> : <ProductSelection show={selectedCategory}/> }
        </div>
        <Cart />
        </CartContext.Provider>
        </TotalContext.Provider>
    </div>);
}

export default ShopContainer;