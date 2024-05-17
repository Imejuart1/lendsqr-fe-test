import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './UserDetails.scss';
import PersonalInformation from './PersonalInformation.tsx';
import { useNavigate } from 'react-router-dom';

const UserDetails: React.FC = () => {
  const location = useLocation();
  const { username } = useParams();

  const user = location.state.user;
  const navigate = useNavigate();
  const [selectedNav, setSelectedNav] = useState('General Details');

  return (
    <div className='details-container'>
      <div className='dashboard_main'>
        <div className='user_backbtn' onClick={()=> navigate(`/dashboard`)}>
      <img src='../images/back btn.svg'/>
      </div>
      <div className='userbtn_title'>
        <div>
        <h2>User Details</h2>
        </div>
        <div className='blackactive_btn'>
          <button className='blacklist_btn'>Blacklist User</button>
          <button className='activate_btn'>Activate User</button>
        </div>
        </div>
        <div className="dashboard-cards">
          <div className='userdetails_overview'>
           <div className='overview_column'>
            <img src='../images/avatar.svg'/>
           </div>
           <div className='overview_column'>
            <span>{user.USERNAME}</span>
            <p>LSQFf587g90</p>
           </div>
           <div className='tr_line'></div>
           <div className='overview_column'>
            <div className='Tier'>User’s Tier</div>
            <div className='star'>
            <img src='../images/star1.svg'/>
            <img src='../images/star2.svg'/>
            <img src='../images/star2.svg'/>
            </div>
           </div>
           <div className='tr_line'></div>
           <div className='overview_column'>
            <span>₦200,000.00</span>
            <p>9912345678/Providus Bank</p>
           </div>
          </div>

          <div className='userdetails_nav'>
            <div 
              className={`user_nav ${selectedNav === 'General Details' ? 'active' : ''}`}
              onClick={() => setSelectedNav('General Details')}
            >
              <span>General Details</span>
            </div>
            <div 
              className={`user_nav ${selectedNav === 'Documents' ? 'active' : ''}`}
              onClick={() => setSelectedNav('Documents')}
            >
              <span>Documents</span>
            </div>
            <div 
              className={`user_nav ${selectedNav === 'Bank Details' ? 'active' : ''}`}
              onClick={() => setSelectedNav('Bank Details')}
            >
              <span>Bank Details</span>
            </div>
            <div 
              className={`user_nav ${selectedNav === 'Loans' ? 'active' : ''}`}
              onClick={() => setSelectedNav('Loans')}
            >
              <span>Loans</span>
            </div>
            <div 
              className={`user_nav ${selectedNav === 'Savings' ? 'active' : ''}`}
              onClick={() => setSelectedNav('Savings')}
            >
              <span>Savings</span>
            </div>
            <div 
              className={`user_nav ${selectedNav === 'App and System' ? 'active' : ''}`}
              onClick={() => setSelectedNav('App and System')}
            >
              <span>App and System</span>
            </div>
          </div>
        </div>
        <div className="dashboard-table">
          {selectedNav === 'General Details' && <PersonalInformation user={user} />}
          {selectedNav === 'Documents' && <div style={{marginTop:'2vw', backgroundColor:'white', textAlign:'center', fontSize:'1vw'}}>Documents</div>}
          {selectedNav === 'Bank Details' && <div style={{marginTop:'2vw', backgroundColor:'white', textAlign:'center', fontSize:'1vw'}}>Bank Details</div>}
          {selectedNav === 'Loans' && <div style={{marginTop:'2vw', backgroundColor:'white', textAlign:'center', fontSize:'1vw'}}>Loans</div>}
          {selectedNav === 'Savings' && <div style={{marginTop:'2vw', backgroundColor:'white', textAlign:'center', fontSize:'1vw'}}>Savings</div>}
          {selectedNav === 'App and System' && <div style={{marginTop:'2vw', backgroundColor:'white', textAlign:'center', fontSize:'1vw'}}>App and System</div>}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
