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

        <div className='info_section'>
          <h4>Personal Information</h4>
          <div className='person_info'>
            <div className='ronald'>
            <div className="full_name">
              <h5>FULL  NAME</h5>
              <h6>Grace Effion</h6>
            </div>
            <div className="full_name">
              <h5>PHONE NUMBER</h5>
              <h6>07060780922</h6>
            </div>
            <div className="full_name">
              <h5>EMAIL ADDRESS</h5>
              <h6>grace@gmail.com</h6>
            </div>
            <div className="full_name">
              <h5>BVN</h5>
              <h6>07060780922</h6>
            </div>
            <div className="full_name">
              <h5>GENDER</h5>
              <h6>Female</h6>
            </div>
            </div>
            <div className='ronald'>
            <div className="pull_name">
              <h5>MARITAL STATUS</h5>
              <h6>Single</h6>
            </div>
            <div className="pull_name">
              <h5>CHILDREN</h5>
              <h6>None</h6>
            </div>
            <div className="pull_name">
              <h5>TYPE OF RESIDENCE</h5>
              <h6>Parent's Apartment</h6>
            </div>
           </div>
          </div>
             <img className="lane" src={Dividr} alt=""/>
        </div>

     
        </div>
      
    )
  }
}