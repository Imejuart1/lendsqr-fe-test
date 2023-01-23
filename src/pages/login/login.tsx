import React, { Component } from 'react';
import Pablo from '../../assets/images/pablo-sign.png';
import Lendsqr from '../../assets/images/lendsqr.png';
import Union from '../../assets/images/Union.png';
import  './login.scss';
import { useState } from 'react';

type Props = {}

type State = {}

 
function Login()  {


const [passwordShown, setPasswordShown] = useState(false);
const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
   
    return (
                    
      <div className= "login-main_container">
        
        {/*right side of the login page*/}
        <div className = "login-right">
          {/*company-logo container*/}
          <div className = "company_logo">
            <img className="onelogo" src={Union} alt='illustration_image'/>
            <img className="twologo" src={Lendsqr} alt='illustration_image'/>
          </div>
          {/*illustration container*/}
          <div className="illustration_image">
           <img className="illustratio_image" src={Pablo} alt='illustration_image'/>
          </div>  
        </div>

        {/*left side of the login page*/}
        <div className = "login-left">
          <form>
            <div>
            <h2>Welcome!</h2>
            </div>
            <div>
            <h5>Enter details to login</h5>
            </div>
            {/*input for email*/}
            <div>
            <input className='login-email' type="email" name="email" placeholder='Email'required/>
            </div>
            {/*input for password*/}
            <div>
            <div className='login-pasword'><input  className='login-password' type={passwordShown ? "text" : "password"} name="password" placeholder='Password' required/></div>
           <div className='span-sow'> <button className='span-show' onClick={togglePassword}>SHOW</button></div>
             {/*<span className='span-show'>SHOW</span>*/}
            </div>
            <div>
            {/*login-button*/}
            <p>FORGOT PASSWORD?</p>
            </div>
            <button type='submit'className='Log-button'>LOG IN</button>
          </form>
        </div>

      </div>
    )
  }



export default Login