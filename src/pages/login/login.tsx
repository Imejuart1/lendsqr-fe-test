import React, { Component } from 'react';
import Pablo from '../../assets/images/pablo-sign.png';
import Lendsqr from '../../assets/images/lendsqr.png';
import Union from '../../assets/images/Union.png';
import  './login.scss';

type Props = {}

type State = {}

export default class login extends Component<Props, State> {
  state = {}

  render() {
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
            <input  className='login-password' type="password"name="password" placeholder='Your full name' required/>
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
}