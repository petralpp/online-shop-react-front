import { Outlet } from "react-router-dom";
import { PriceProvider } from "../../PriceContext.js";
import { CartProvider } from "../../CartContext.js";
import Cart from "./Cart.jsx";
import useWindowResizeThreshold from "../../js/windowResize.js";
import '../stylesheet.css';

const MAX_TABLET_WIDTH = 850;

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