import React, { useState } from "react";
import {Link} from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const res = await fetch ('http://localhost:4000/auth/register',{
        method: 'POST',
        body: JSON.stringify(formData),
        headers:{
            'content-type': 'application/json',
        },

    });
    if (res.ok){
        
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Register</button>
      <Link to='/'>   <button>Login Page</button></Link>
   
    </form>
  );
};

export default SignupForm;