import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Login.scss'; 

const Login: React.FC =()=>{
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>)=> {
        setEmail(e.target.value);
    }

    const handlePasswordChnage = (e: ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value);
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
    }
    return(
        <div className="login-container">
      <div className="login-left">
        {/* Image goes here */}
        <img src="path_to_your_image" alt="Login" />
      </div>
      <div className="login-right">
      <h2>Welcome</h2>
      <p>Enter details to login</p>
      <form onSubmit={handleSubmit}>
        <input 
        type="email"
        placeholder='Email'
        value={email}
        onChange={handleEmailChange}
        />
        <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={handlePasswordChnage}
        />
        <a href="#">Forgot password?</a>
        <button type='submit'>Login</button>
      </form>
      </div>

      </div>
   
    );
};

export default Login;