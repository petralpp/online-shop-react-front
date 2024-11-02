import { Outlet } from "react-router-dom";
import { PriceProvider } from "../../PriceContext.js";
import { CartProvider } from "../../CartContext.js";
import Cart from "./Cart.jsx";
import '../stylesheet.css';

function ContentLayout() {

    return(
    <div id="content-layout">
        <PriceProvider>
        <CartProvider>
            <Outlet />
            <Cart />
        </CartProvider>
        </PriceProvider>
    </div>
    );
}

export default ContentLayout;