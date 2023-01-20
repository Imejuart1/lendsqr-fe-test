import React, { Component } from 'react'
import Tier from '../../assets/images/tier.png';
import Avatar from '../../assets/images/avatar.png';
import Line from '../../assets/images/Line 1.png';
import Vectororg from '../../assets/images/Vectororg.png';
import Dividr from '../../assets/images/divider .png';


import "./Userdetails.scss"
type Props = {}

type State = {}

export default class Userdetails extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='detailsmain_container'>
        <a href='/users'>Back to Users</a>
        <h2 className='heading'>Users Details</h2>

        <div className='name_section'>
          <div className='name_upper'>
           <img className="avatar"src={Avatar} alt="name"/>

           <div className="upper_extra">
           <h5>Grace Effiom</h5>
           <span>LSFQNTYUIO</span>
           </div>
           <img src={Line} alt="line"/>
            
            <div className="upper_extra">
           <p></p>
           <img src={Tier} alt="star"/>
           </div>
            
           <img src={Line} alt="line"/>

            <div className="upper_extra">
           <h5>N200,000.00</h5>
           <span>99839R34/Providus Bank</span>
           </div>
           
          </div>
          <div className='name_lower'>
           <a href="/userdetails">General Details</a>
           <a href="/userdetails">Documents</a>
           <a href="/userdetails">Bank Details</a>
           <a href="/userdetails">Loans</a>
           <a href="/userdetails">Savings</a>
           <a href="/userdetails">App and System</a>
          </div>
        </div>
       {/*personal information*/}
        <div className='info_section'>
          <h4>Personal Information</h4>
          <div className='person_info'>
            <div className='person_infooo'>
              <div className="first_person_inf">
            <div>
              <h5>FULL  NAME</h5>
              <h6>Grace Effion</h6>
              </div>
              <div >
              <h5>MARITAL STATUS</h5>
              <h6>Single</h6>
            </div>
            </div>
            <div className="first_person_inf">
            <div>
              <h5>PHONE NUMBER</h5>
              <h6>07060780922</h6>
              </div>
              <div >
                <h5>CHILDREN</h5>
              <h6>None</h6>
             
            </div>
            </div>

            <div className="first_person_inf">
            <div>
             <h5>EMAIL ADDRESS</h5>
              <h6>grace@gmail.com</h6>
              </div>
              <div >
                <h5>TYPE OF RESIDENCE</h5>
              <h6>Parent's Apartment</h6>
            </div>
            </div>

            <div className="first_person_inf">
            <div>
              <h5>BVN</h5>
              <h6>07060780922</h6>
              </div>
              <div >
              
            </div>
            </div>

            <div className="first_person_inf">
            <div>
              <h5>GENDER</h5>
              <h6>Female</h6>
              </div>
              <div >
              
            </div>
            </div>
            </div>
          </div>
             <img className="lane" src={Dividr} alt=""/>


        {/*Education and Employment*/}
          <h4>Education and Employment</h4>
          <div className='person_info'>
            <div className='employ_infooo'>
              <div className="first_person_inf">
            <div>
              <h5>LEVEL OF EDUCATION</h5>
              <h6>B.Sc</h6>
              </div>
              <div >
                    <h5>OFFICE EMAIL</h5>
              <h6>grace@lendsqr.com</h6>
            </div>
            </div>
            <div className="first_person_inf">
            <div>
             <h5>EMPLOYMENT STATUS</h5>
              <h6>Employed</h6>
              </div>
              <div >
              <h5>MONTHLY INCOME</h5>
              <h6>N200,000-N400,000</h6>
             
            </div>
            </div>

            <div className="first_person_inf">
            <div>
             <h5>EMAIL ADDRESS</h5>
              <h6>grace@gmail.com</h6>
              </div>
              <div >
                <h5>TYPE OF RESIDENCE</h5>
              <h6>Parent's Apartment</h6>
            </div>
            </div>

            <div className="first_person_inf">
            <div>
                 <h5>SECTION OF EMPLOYMENT</h5>
              <h6>Fintech</h6>
              </div>
               <h5>LOAN REPAYMENT</h5>
              <h6>40,000</h6>
              <div >
              
            </div>
            </div>

            <div className="first_person_inf">
            <div>
              <h5>DURATION OF EMPLOYMENT</h5>
              <h6>2 years</h6>
              </div>
              <div >
              
            </div>
            </div>
            </div>
          </div>
             <img className="lane" src={Dividr} alt=""/>

             {/*socials*/}
          <h4>Socials</h4>
          <div className='person_info'>
            <div className='person_infooo'>
              <div className="first_person_inf">
            <div>
              <h5>TWITTER</h5>
              <h6>grace@effong</h6>
              </div>
              <div >
            </div>
            </div>
            <div className="first_person_inf">
            <div>
             <h5>FACEBOOK</h5>
              <h6>GRACE EFFIONG</h6>
              </div>
              <div >
            </div>
            </div>

            <div className="first_person_inf">
            <div>   
               <h5>INSTAGRAM</h5>
              <h6>@grace_effiong</h6>
              </div>
              <div >
            </div>
            </div>
            </div>
          </div>
             <img className="lane" src={Dividr} alt=""/>

             <h4>Guarantor</h4>
          <div className='person_info'>
            <div className='person_infooo'>
              <div className="first_person_inf">
            <div>
              <h5>FULL NAME</h5>
              <h6>Debby Ogana</h6>
              </div>
              <div >
            </div>
            </div>
            <div className="first_person_inf">
            <div>
             <h5>PHONE NUMBER</h5>
              <h6>09087463522</h6>
              </div>
              <div >
            </div>
            </div>

            <div className="first_person_inf">
            <div>   
               <h5>EMAIL ADDRESS</h5>
              <h6>debby@gmail.com</h6>
              </div>
              <div >
            </div>
            </div>

            <div className="first_person_inf">
            <div>   
               <h5>RELATIONSHIP</h5>
              <h6>Sister</h6>
              </div>
              <div >
            </div>
            </div>
            </div>
          </div>
             
        </div>
     
        </div>
      
    )
  }
}