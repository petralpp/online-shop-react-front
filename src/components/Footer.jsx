import '../App.css';


function Footer() {
    return(
    <div id="footer-div">
        <div className='logo'>
            <img src='/images/beet-vegetable-icon.png' width={30} height={50} alt='beet'></img>
            <h3>eFood <br/> Store</h3>
        </div>
        <p>Info</p>
        <p>Work for us</p>
        <p>Terms & conditions</p>
        <p>Privacy policy</p>
    </div>
    );
}

export default Footer;