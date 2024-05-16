// PersonalInformation.tsx
import React from 'react';
import './PersonalInformation.scss'
// Import your user data type

interface PersonalInformationProps {
  user: any;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ user }) => {
  const SocialUsername = `@${user.USERNAME.replace(" ", "_").toLowerCase()}`;
  const formattedEmail = user.EMAIL.replace(/(@irorun\.com|@lendsqr\.com)/, '@gmail.com');
   
  return (
    <div className='general_details'>
    <div className='personal-information'>
      <span className='general_subhead'>
      Personal Information
      </span>
      <div className='personal-info-row'>
      <div className='personal-info-item_main'>
      <div className='personal-info-item'>
        <span className='info-label'>Full Name</span>
        <span className='info-value'>{user.USERNAME}</span>
      </div>
      <div className='personal-info-item'>
        <span className='info-label'>Marital Status</span>
        <span className='info-value'>SINGLE</span>
      </div>
      </div>
      <div className='personal-info-item_main'>
      <div className='personal-info-item'>
        <span className='info-label'>Phone Number</span>
        <span className='info-value'>0{user['PHONE NUMBER']}</span>
      </div>
      <div className='personal-info-item'>
        <span className='info-label'>Children</span>
        <span className='info-value'>NONE</span>
      </div>
      </div>   
      <div className='personal-info-item_main'>
      <div className='personal-info-item'>
        <span className='info-label'>Email</span>
        <span className='info-value'>{formattedEmail}</span>
      </div>
      <div className='personal-info-item'>
        <span className='info-label'>TYPE OF RESIDENCE</span>
        <span className='info-value'>Parent's apartment</span>
      </div>
      </div>
      <div className='personal-info-item_main'>
      <div className='personal-info-item'>
        <span className='info-label'>BVN</span>
        <span className='info-value'>0{user['PHONE NUMBER']}</span>
      </div>
      </div>
      <div className='personal-info-item_main'>
      <div className='personal-info-item'>
        <span className='info-label'>GENDER</span>
        <span className='info-value'>FEMALE</span>
      </div>
      </div>
      </div>
    </div>
    <div className='tr_line'></div>
    <div className='personal-information'>
<span className='general_subhead'>
Education and Employment
</span>
<div className='personal-info-row'>
<div className='personal-info-item_main'>
<div className='personal-info-item'>
  <span className='info-label'>level of education</span>
  <span className='info-value'>B.Sc</span>
</div>
<div className='personal-info-item'>
  <span className='info-label'>office email</span>
  <span className='info-value'>{user.EMAIL}</span>
</div>
</div>
<div className='personal-info-item_main'>
<div className='personal-info-item'>
  <span className='info-label'>Monthly income</span>
  <span className='info-value'>₦200,000.00- ₦400,000.00</span>
</div>
<div className='personal-info-item'>
  <span className='info-label'>loan repayment</span>
  <span className='info-value'>40,000</span>
</div>
</div>

<div className='personal-info-item_main'>
<div className='personal-info-item'>
  <span className='info-label'>sector of employment</span>
  <span className='info-value'>FinTech</span>
</div>
<div className='personal-info-item'>
  <span className='info-label'>loan repayment</span>
  <span className='info-value'>40,000</span>
</div>
</div>

<div className='personal-info-item_main'>
<div className='personal-info-item'>
  <span className='info-label'>Duration of employment</span>
  <span className='info-value'>2 years</span>
</div>
</div>
</div>
</div>
<div className='tr_line'></div>


<div className='personal-information' style={{marginRight:'34vw'}}>
<span className='general_subhead'>
Socials
</span>
<div className='personal-info-row'>
<div className='personal-info-item_main'>
<div className='personal-info-item'>
  <span className='info-label'>Twitter</span>
  <span className='info-value'>{SocialUsername}</span>
</div>
</div>

<div className='personal-info-item_main'>
<div className='personal-info-item'>
  <span className='info-label'>Facebook</span>
  <span className='info-value'>{user.USERNAME}</span>
</div>
</div>

<div className='personal-info-item_main'>
<div className='personal-info-item'>
  <span className='info-label'>Instagram</span>
  <span className='info-value'>{SocialUsername}</span>
</div>
</div>
</div>

</div>
<div className='tr_line'></div>

<div className='personal-information' style={{marginRight:'16vw'}}>
<span className='general_subhead'>
Guarantor
</span>
<div className='personal-info-row'>
<div className='personal-info-item_main'>
<div className='personal-info-item'>
  <span className='info-label'>FULL NAME</span>
  <span className='info-value'>Debby Ogana</span>
</div>
</div>

<div className='personal-info-item_main'>
<div className='personal-info-item'>
  <span className='info-label'>PHONE NUMBER</span>
  <span className='info-value'>07060780922</span>
</div>
</div>

<div className='personal-info-item_main'>
<div className='personal-info-item'>
  <span className='info-label'>Email Address</span>
  <span className='info-value'>debby@gmail.com</span>
</div>
</div>

<div className='personal-info-item_main'>
<div className='personal-info-item'>
  <span className='info-label'>RELATIONSHIP</span>
  <span className='info-value'>Sister</span>
</div>
  </div>
</div>

</div>
<div className='tr_line'></div>
<div className='personal-information' style={{marginRight:'16vw'}}>
<div className='personal-info-row'>
<div className='personal-info-item_main'>
<div className='personal-info-item'>
  <span className='info-label'>FULL NAME</span>
  <span className='info-value'>Debby Ogana</span>
</div>
</div>

<div className='personal-info-item_main' >
<div className='personal-info-item'>
  <span className='info-label'>PHONE NUMBER</span>
  <span className='info-value'>07060780922</span>
</div>
</div>

<div className='personal-info-item_main'>
<div className='personal-info-item'>
  <span className='info-label'>Email Address</span>
  <span className='info-value'>debby@gmail.com</span>
</div>
</div>

<div className='personal-info-item_main'>
<div className='personal-info-item'>
  <span className='info-label'>RELATIONSHIP</span>
  <span className='info-value'>Sister</span>
</div>
</div>
</div>
</div>


</div>
  );
};

export default PersonalInformation;
