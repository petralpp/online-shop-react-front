import { categories } from "../../../js/categories.js";

function SidebarDesktop({ sendDataToParent }) {

    const handleClick = (id) => {
        sendDataToParent(id);
    }

    return(      
    <div id="categories">
        {categories.map((category) => 
        <div key={category.id} className="category-div" onClick={() => handleClick(category.id)}>
        <img src={category.icon} alt="icon"/>{category.label}</div>)}
    </div>);
}

export default SidebarDesktop;