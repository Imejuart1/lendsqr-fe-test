import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import './Login.scss';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // Utilize useNavigate hook

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/dashboard'); 
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className='login-left_main'>
        <div className="login-left">
          <img className='lendqr-logo' src="/images/Group.webp" alt="Login" />
          <img className='pablo' src="/images/welcome.png" alt="Login" />
        </div>
      </div>
      <div className="login-right">
        <div className='right-info'>
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>
        </div>
        <form onSubmit={handleSubmit} data-testid="form">
          <div className='right-inputs'>
          <span className="password-input">
            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={handleEmailChange}
            />
             </span>
            <span className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                value={password}
                onChange={handlePasswordChange}
              />
              {showPassword ? (
                <span className='password-toggle' onClick={togglePasswordVisibility}>
                  HIDE
                </span>
              ) : (
                <span className='password-toggle' onClick={togglePasswordVisibility}>
                  SHOW
                </span>
              )}
            </span>
            <span><a href="#">FORGOT PASSWORD?</a></span>
    
            <button type='submit'>LOG IN</button>
 
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
