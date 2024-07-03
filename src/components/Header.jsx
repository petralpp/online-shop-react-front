import { Link } from "react-router-dom";
import '../App.css';

function Header() {
    return(
    <div id="header-div">
        <Link to='/' style={{ textDecoration: 'none' }}><h1>eFood <br/>Store</h1></Link>
        <button id="login" disabled>Login</button>
    </div>);
}

export default Header;