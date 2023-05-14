import React from 'react'
import { Link } from 'react-router-dom';


export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = {
      name: data.get ('name'),
      password: data.get('password'),
    };

    const res = await fetch('http://localhost:4000/auth/login',{
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type" : "application/json",
      },
    });

if(res.ok){
  console.log('done');
}

  };
    
    





  return (
    <div>
      <Link to="/register"><button>Don't have an account? Register</button></Link>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text"   />
        </label>
        <br />
        <label>
          Password:
          <input type="password"  />
        </label>
        <br />
        <Link to="/Home"><button>Login</button></Link>
      </form>
    </div>
  )
  }

