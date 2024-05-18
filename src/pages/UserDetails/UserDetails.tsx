import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './UserDetails.scss';
import PersonalInformation from './PersonalInformation.tsx';
import { useNavigate } from 'react-router-dom';

const UserDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedNav, setSelectedNav] = useState('General Details');

  // Check if user data exists, otherwise use default data
  const user = location.state ? location.state.user : {
    "ORGANIZATION": "Lendstar",
    "USERNAME": "Grace Effiom",
    "EMAIL": "grace@lendstar.com",
    "PHONE NUMBER": "7060780922",
    "DATE JOINED": "Apr 30, 2020 10:00 AM",
    "STATUS": "Blacklisted"
  };

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
          {/* Render user details */}
        </div>
        <div className="dashboard-table">
          {selectedNav === 'General Details' && <PersonalInformation user={user} />}
          {/* Render other sections based on selectedNav */}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
