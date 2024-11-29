import { useState } from "react";
import { categories } from "../../../js/categories";

function SidebarMobile({ sendDataToParent }) {
    const [selectedValue, setSelectedValue] = useState('vegetables');
    const options = categories;

    const handleClick = (id) => {
        sendDataToParent(id);
        setSelectedValue(id);
    }

    return(
        <select
            value={selectedValue}
            onChange={(e) => handleClick(e.target.value)}
            >
            {options.map((option) => (
            <option key={option.id} value={option.id}>
            {option.label}
            </option>
            ))}
        </select>
    );
}

export default SidebarMobile;