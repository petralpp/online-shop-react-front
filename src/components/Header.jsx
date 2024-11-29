import { Link } from "react-router-dom";
import { BeetLogo } from "./Icons";

function Header() {

    return(
    <div id="header-div">
        <div className='logo'>
        <img src={BeetLogo} width={50} height={70} alt='beet'></img>
            <Link to='/' style={{ textDecoration: 'none' }}><h1 style={{textAlign: "right"}}>eFood <br/>Store</h1></Link>
        </div>
        <div>
            <button className="regular-button button-disabled" disabled>Log in</button>
            <button className="regular-button button-disabled" disabled>Sign up</button>
        </div>
    </div>);
}

export default Header;