import { Link } from "react-router-dom";
import storeLogo from "../images/storeLogo.png";

function Header() {

    return(
    <div id="header-div">
        <Link to='/'>
        <img src={storeLogo} width={180} height={105} alt="store logo" id="beet-logo-h"></img></Link>
        <div>
            <button className="regular-button button-disabled" disabled>Log in</button>
            <button className="regular-button button-disabled" disabled>Sign up</button>
        </div>
    </div>);
}

export default Header;