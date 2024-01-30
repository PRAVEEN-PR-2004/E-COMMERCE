// Login.js

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Loginstyle.css'; // Import CSS file for styling
import { ShopContext } from '../context/Shop_context';

const Login = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const {setUsername} = useContext(ShopContext);
  const [customername, setCustomername] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    // Check if any field is empty
    if (!customername || !address || !phone) {
      alert('Please fill in all fields');
      return;
    }

    // Navigate to the home component after successful login
    setUsername(customername);
    navigate('/');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-container">
        <label>customername:</label>
        <input
          type="text"
          value={customername}
          onChange={(e) => setCustomername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Phone Number:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
