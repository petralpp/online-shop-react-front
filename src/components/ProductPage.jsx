import { useState } from "react";
//import { TotalContext, CartContext } from "../Contexts.js";
import ProductSelection from "./ProductSelection.jsx";
import { categories, products } from "../js/products.js";
import './Products.css'

function ProductPage() {
    const [selectedCategory, setCategory] = useState(products['vegetables']);
    const [currentHeader, setHeader] = useState('Vegetables');

    const handleClick = (id) => {
        setCategory(products[id]);

        const newHeader = categories.find((header) => header.id === id);
        setHeader(newHeader.label);
    }
    
    return(
    <div className="wrapper">
        <div className="categories">
            {categories.map((category) => 
            <div key={category.id} onClick={() => handleClick(category.id)}>{category.label}</div>)}
        </div>
        <div>
        <h1 id="currentHeader">{currentHeader}</h1>
            { <ProductSelection show={selectedCategory}/> }
        </div>
    </div>);
}

export default ProductPage;