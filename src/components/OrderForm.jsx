import { useState } from 'react';

function Order() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
      }

    return (
    <form onSubmit={handleSubmit}>
        <label>Full name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Phone number:
        <input 
          type="tel" 
          name="phone" 
          value={inputs.phone || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Address:
            <input
            type="text"
            name="address"
            value={inputs.address || ""}
            onChange={handleChange}
            />
        </label>
        <input type="submit"Order/>
    </form>
    );
}

export default Order;