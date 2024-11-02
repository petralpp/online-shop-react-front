import { useState } from "react";
import ProductCard from "./ProductCard.jsx";
import { products } from "../../../js/productData.js";
import { categories } from "../../../js/categories.js";


function ProductPage() {
    const [selectedCategory, setCategory] = useState(products['vegetables']);
    const [categoryId, setCategoryId] = useState('vegetables');
    const [currentHeader, setHeader] = useState('Vegetables');

    const handleClick = (id) => {
        setCategory(products[id]);
        setCategoryId(id);

        const newHeader = categories.find((header) => header.id === id);
        setHeader(newHeader.label);
    }
    
    return(
    <div id="shop-wrapper">
        <div id="categories">
            {categories.map((category) => 
            <div key={category.id} className="category-div" onClick={() => handleClick(category.id)}>
            <img src={`../images/${category.id}.png`} alt="icon"/>{category.label}</div>)}
        </div>
        <div id="product-display">
            <h1>{currentHeader}</h1>
            <div id="product-list">
                {selectedCategory.map((item) =>
                    <ProductCard key={item.name} name={item.name} package={item.package} img={categoryId} price={item.price}/>
                )}
            </div>
        </div>
    </div>);
}

export default ProductPage;