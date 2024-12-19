import { Outlet } from "react-router-dom";
import { PriceProvider } from "../../contexts/PriceContext.js";
import { CartProvider } from "../../contexts/CartContext.js";
import Cart from "./Cart.jsx";
import useWindowResizeThreshold from "../../js/windowResize.js";
import '../stylesheet.css';
import { MAX_TABLET_WIDTH } from "./ProductPage/ProductPage.jsx";

function ContentLayout() {
    const isTabletSize = useWindowResizeThreshold(MAX_TABLET_WIDTH);

    return(
    <div id="content-layout">
        <PriceProvider>
        <CartProvider>
        {isTabletSize ? <Outlet />
            :
            <>
                <Outlet />
                <Cart />
            </>}
        </CartProvider>
        </PriceProvider>
    </div>
    );
}

export default ContentLayout;