import { useState } from 'react';
import { useContext } from "react";
import { TotalContext } from "../../Contexts";
import { Link } from "react-router-dom";

function OrderPage() {
    const [inputs, setInputs] = useState({});
    const { total } = useContext(TotalContext);
    const [isSubmitted, setIsSubmitted] = useState(false);

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
          <img src='/images/icons8-delivery-100.png' width={70} height={70} alt='delivery truck'></img>
          <Link to='/shop'><button class="green-button">Back to store</button></Link>
        </div>
        :
        <div id="order-page">
          <h1>Order information</h1>
          <p>Final bill: <b>{total} €</b></p>
          <div id="order-form">
            <form onSubmit={handleSubmit}>
              <label>Full name:</label><br/>
              <input 
                type="text" 
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}
                required
              /><br/>
              <label>Phone number:</label><br/>
              <input 
                type="tel" 
                name="phone" 
                value={inputs.phone || ""} 
                onChange={handleChange}
                required
              /><br/>
              <label>Address:</label><br/>
              <input
                type="text"
                name="address"
                value={inputs.address || ""}
                onChange={handleChange}
                required
              /><br/>
              {total > 0 ? <input type="submit" value="Order"/> : <input type='submit' value="Order" disabled/>}
            </form>
          </div>
        </div>
    );
}

export default OrderPage;