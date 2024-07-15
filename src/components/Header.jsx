import { Link } from "react-router-dom";
import '../App.css';

function Header() {
    return(
    <div id="header-div">
        <div className='logo'>
        <img src='/images/beet-vegetable-icon.png' width={50} height={70} alt='beet'></img>
            <Link to='/' style={{ textDecoration: 'none' }}><h1>eFood <br/>Store</h1></Link>
        </div>
        <button id="loginBtn" disabled>Login</button>
    </div>);
}

export default Header;