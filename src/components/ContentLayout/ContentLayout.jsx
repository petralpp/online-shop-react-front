import { useState } from "react";
import { Outlet } from "react-router-dom";
import { TotalContext, CartContext } from "../../Contexts.js";
import Cart from "./Cart.jsx";
import '../stylesheet.css';

function ContentLayout() {
    const [total, setTotal] = useState(0);
    const [inCart, setInCart] = useState([]);

    return(
    <div id="content-layout">
        <TotalContext.Provider value={ {total, setTotal} }>
        <CartContext.Provider value={ {inCart, setInCart} }>
            <Outlet />
            <Cart />
        </CartContext.Provider>
        </TotalContext.Provider>
    </div>
    );
}

export default ContentLayout;