// PersonalInformation.tsx
import React from 'react';
import './PersonalInformation.scss'
// Import your user data type

interface PersonalInformationProps {
  user: any;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ user }) => {
  return (
    <div className='personal-information'>
      <div className='personal-info-item'>
      <div className='personal-info-item'>
        <span className='info-label'>Full Name:</span>
        <span className='info-value'>{user.USERNAME}</span>
      </div>
      <div className='personal-info-item'>
        <span className='info-label'>Marital Status:</span>
        <span className='info-value'>{user.maritalStatus}</span>
      </div>
      </div>
      <div className='personal-info-item'>
        <span className='info-label'>Phone Number:</span>
        <span className='info-value'>{user.phoneNumber}</span>
      </div>
      <div className='personal-info-item'>
        <span className='info-label'>Email:</span>
        <span className='info-value'>{user.email}</span>
      </div>
 
      <div className='personal-info-item'>
        <span className='info-label'>Children:</span>
        <span className='info-value'>{user.children}</span>
      </div>
      <div className='personal-info-item'>
        <span className='info-label'>Education Level:</span>
        <span className='info-value'>{user.educationLevel}</span>
      </div>
      <div className='personal-info-item'>
        <span className='info-label'>Employment Status:</span>
        <span className='info-value'>{user.employmentStatus}</span>
      </div>
      <div className='personal-info-item'>
        <span className='info-label'>Office Email:</span>
        <span className='info-value'>{user.officeEmail}</span>
      </div>
      <div className='personal-info-item'>
        <span className='info-label'>Monthly Income:</span>
        <span className='info-value'>{user.monthlyIncome}</span>
      </div>
      <div className='personal-info-item'>
        <span className='info-label'>Socials:</span>
        <span className='info-value'>{user.socials}</span>
      </div>
      <div className='personal-info-item'>
        <span className='info-label'>Guarantor:</span>
        <span className='info-value'>{user.guarantor}</span>
      </div>
    </div>
  );
};

export default PersonalInformation;
