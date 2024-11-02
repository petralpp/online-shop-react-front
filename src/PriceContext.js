import { createContext, useState, useContext } from "react";

const PriceContext = createContext(0);

export const PriceProvider = ({ children }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const increasePrice = (item) => {
        const roundedTotal = Math.round((totalPrice+item.price) * 100) / 100;
        setTotalPrice(roundedTotal);
    };

    const decreasePrice = (item) => {
        const roundedTotal = Math.round((totalPrice-item.price) * 100) / 100;
        setTotalPrice(roundedTotal);
    };

    const clearPrice = () => {
        setTotalPrice(0);
    };
    
    return (
    <PriceContext.Provider
        value={{ totalPrice, increasePrice, decreasePrice, clearPrice }}
    >
        {children}
    </PriceContext.Provider>
    );
}

export const usePrice = () => useContext(PriceContext);

export default PriceContext;