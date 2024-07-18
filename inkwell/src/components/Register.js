import React, { useState } from 'react';
import axios from 'axios';
import { Link } from'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5555/users/register', formData);
      alert('User registered successfully');
    } catch (error) {
      console.error('Error registering user', error);
      alert('Registration failed');
    }
  };

  return (
    <div className="register-container">
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <button type="submit">Register</button>
    </form>
    <p>
      Already have an account? <Link to="/login">Login</Link>
    </p>
    </div>
  );
};

export default Register;