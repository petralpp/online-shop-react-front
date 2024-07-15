import { useState } from "react";
import { Outlet } from "react-router-dom";
import { TotalContext, CartContext } from "../Contexts.js";
import Cart from "./Cart.jsx";
import './Products.css';

function ShopLayout() {
    const [total, setTotal] = useState(0);
    const [inCart, setInCart] = useState([]);

    return(
    <div id="layout">
        <TotalContext.Provider value={ {total, setTotal} }>
        <CartContext.Provider value={ {inCart, setInCart} }>
            <div id="outletDiv">
                <Outlet />
            </div>
            <div id="cartDiv">
                <Cart />
            </div>
        </CartContext.Provider>
        </TotalContext.Provider>
    </div>
    );
}

export default ShopLayout;