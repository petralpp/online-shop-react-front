import storeLogoOpa from "../images/storeLogoOpa.png";

function Footer() {

    return(
    <div id="footer-div">
        <img src={storeLogoOpa} width={80} height={50} alt='beet'></img>
        <p>Info</p>
        <p>Work for us</p>
        <p>Terms & conditions</p>
        <p>Privacy policy</p>
        <p><i>Icons from <a href="https://icons8.com/icons">Icons8</a></i></p>
        <p><i>Images from <a href="https://www.pexels.com/">Pexels</a></i></p>
    </div>
    );
}

export default Footer;