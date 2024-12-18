import { Link } from "react-router-dom";
import BagImage from "../images/bag10.jpg";

function WelcomePage() {

    return (
    <div id="welcome-div">
        <div id="welcome-text">
            <h1>Welcome!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exer citation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div>
                <Link to='shop'><button className="green-button">To store</button></Link>
            </div>
        </div>
        <div id="bag-img-div">
            <img src={BagImage} alt="A grocery bag" id="bag-image" height="440" width="350"></img>
        </div>
    </div>);
}

export default WelcomePage;