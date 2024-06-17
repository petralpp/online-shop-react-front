import ProductCard from "./ProductCard.jsx";
import './Products.css'

function ProductSelection(props) {
    return (
        <div className="productList">
            {props.show.map((item) => 
                <ProductCard key={item.name} name={item.name} package={item.package} price={item.price}/>
            )}
        </div>
    );
};

export default ProductSelection;