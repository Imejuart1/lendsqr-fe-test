// UserDetails.tsx
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './UserDetails.scss'
import PersonalInformation from './PersonalInformation.tsx';

const UserDetails: React.FC = () => {
  const location = useLocation();
  const { username } = useParams();
  const user = location.state.user;

  return (
    <div className='details-container'>
      <div className='dashboard_main'>
        
        <h2>User Details</h2>
       
      <div className="dashboard-cards">
      
      </div>
      <div className="dashboard-table">
      <PersonalInformation user={user} />

      </div>
      </div>
    </div>
  );
};

export default UserDetails;
