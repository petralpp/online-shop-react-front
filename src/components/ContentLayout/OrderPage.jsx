import { useState } from 'react';
import { usePrice } from '../../PriceContext';
import { Link } from "react-router-dom";
import { DeliveryIcon } from '../Icons';
import { CartIcon } from '../Icons';
import Modal from './Modal';
import Cart from './Cart';
import useWindowResizeThreshold from '../../js/windowResize';
import { MAX_TABLET_WIDTH } from './ProductPage/ProductPage';

function OrderPage() {
    const [inputs, setInputs] = useState({});
    const { totalPrice } = usePrice();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [modal, setModal] = useState(false);
    const isTabletSize = useWindowResizeThreshold(MAX_TABLET_WIDTH);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
      }

    return (
      isSubmitted ? 
        <div id="submitted">
          <h1>Thank you for your order!</h1>
          <img src={DeliveryIcon} width={70} height={70} alt='delivery truck' id="delivery-icon"></img>
          <Link to='/shop'><button className="green-button">Back to store</button></Link>
        </div>
        :
        <div id="order-page">
          {isTabletSize &&
          <div id="order-page-modal">
            <button className="cart-button" onClick={() => setModal(true)}>
              <img src={CartIcon} width={30} height={30} alt="cart"></img></button>
            <Modal
                openModal={modal}
                closeModal={() => setModal(false)}>
                <Cart />
            </Modal>
          </div>
          }
          <div>
          <h1>Order information</h1>
          <p>Final bill: <b>{totalPrice} €</b></p>
          <div id="order-form">
            <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label><span>*</span>Full name</label><br/>
                <input 
                  type="text" 
                  name="username" 
                  value={inputs.username || ""} 
                  onChange={handleChange}
                  required
              /></div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label><span>*</span>Phone number</label><br/>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={inputs.phone || ""} 
                    onChange={handleChange}
                    required
                /></div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>E-mail</label><br/>
                  <input
                    type="email"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                /></div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label><span>*</span>Street address</label><br/>
                  <input
                    type="text"
                    name="address"
                    value={inputs.address || ""}
                    onChange={handleChange}
                    required
                /></div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label><span>*</span>ZIP code</label><br/>
                  <input
                    type="text"
                    pattern="[0-9]{5}"
                    name="zip"
                    placeholder="5 digit number"
                    value={inputs.zip || ""}
                    onChange={handleChange}
                    required
                  /></div>
                  <div className="form-group">
                    <label><span>*</span>City</label><br/>
                    <input
                      type="text"
                      name="city"
                      value={inputs.city || ""}
                      onChange={handleChange}
                      required
                    /></div>
              </div>
              <div id="form-buttons">
                <Link to='/shop'><button className="regular-button">Back</button></Link>
                {totalPrice > 0 ? <input type="submit" value="Order" className="green-button"/> 
                : <input type='submit' value="Order" className="green-button button-disabled" disabled/>}
              </div>
            </form>
          </div>
          </div>
        </div>
    );
}

export default OrderPage;