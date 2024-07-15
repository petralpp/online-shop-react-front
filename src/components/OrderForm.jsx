import { useState } from 'react';
import { useContext } from "react";
import { TotalContext } from "../Contexts";
import './Products.css'

function OrderForm() {
    const [inputs, setInputs] = useState({});
    const { total } = useContext(TotalContext);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs.address);
      }

    return (
      <div id="orderPage">
      <h1>Order information</h1>
      <p>Final bill: <bold>{total} €</bold></p>
      <div id="orderForm">
      <form onSubmit={handleSubmit}>
        <label>Full name:</label><br/>
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        /><br/>
        <label>Phone number:</label><br/>
        <input 
          type="tel" 
          name="phone" 
          value={inputs.phone || ""} 
          onChange={handleChange}
        /><br/>
        <label>Address:</label><br/>
        <input
          type="text"
          name="address"
          value={inputs.address || ""}
          onChange={handleChange}
        /><br/>
        <input type="submit" value="Order"/>
      </form>
      </div>
      </div>
    );
}

export default OrderForm;