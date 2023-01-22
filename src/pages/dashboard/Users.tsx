import React, { Component } from 'react'
import './Users.scss'
import { useState, useEffect } from "react"
import Sidebar from "../../components/sidebar/Sidebar.tsx"
import User from '../../assets/images/icon@2x.png';
import Userr from '../../assets/images/icon.png';
import Userrr from '../../assets/images/icon3.png';
import Userrrr from '../../assets/images/icon 4.png';
import Vectororg from '../../assets/images/Vectororg.png';
import Dot from '../../assets/images/dot.png';




function Users() {


  const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(9);


        useEffect(() => {
            fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
                .then((res) => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setItems(result);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                );
        }, []);

        if (error) {
            return <>{error.message}</>;
        } else if (!isLoaded) {
            return <>loading...</>;
        } else {
            return (
      <div className="usermain_container">
        
      <h2 className='heading'>Users</h2>
       <div className='users_record'>
        <div className='users_record_users'>
         <img src={User} className="user1" alt=""/>
          <h4>USERS</h4>
          <p>2,453</p>
        </div>
        <div className='users_record_users'>
          <img src={Userr} alt=""/>
          <h4>ACTIVE USERS</h4>
          <p>2,453</p>
        </div>
        <div className='users_record_users'>
          <img src={Userrr} alt=""/>
          <h4>USERS WITH LOANS</h4>
          <p>12,453</p>
        </div>
        <div className='users_record_users'>
          <img src={Userrrr} alt=""/>
          <h4>USERS WITH SAVINGS</h4>
          <p>102,453</p>
        </div>
         </div>
        <div className="completeinfo">
          
          <div className='organization' >

            <div className='iconss'>
           <h5>ORGANIZATION</h5>
           <img src={Vectororg} className="user1" alt="remote"/>
           </div>

            {items.map((item) => (
          <ul>
          <li>{item.orgName}</li></ul>))}
          
        </div>
      
        
        <div className='username'>
          
          <div className='iconss'><h5>USERNAME</h5>
          <img src={Vectororg} className="user1" alt=""/>
          </div>
          
           {items.map((item) => (
          <ul>
          <li>{item.userName}</li></ul>))}
        </div>

        <div className='email'>
          <div className='iconss'>
             <h5>EMAIL</h5>
          <img src={Vectororg} className="user1" alt=""/>
          </div>
           {items.map((item) => (
          <ul>
          <li>{item.email}</li></ul>))}
        </div>


        <div className='phoneno'>

          <div className='iconss'>
            <h5>PHONE NUMBER</h5>
          <img src={Vectororg} className="user1" alt=""/>
          </div>
          
           {items.map((item) => (
          <ul>
          <li>{item.phoneNumber}</li></ul>))}
        </div>


        <div className='date'>
           <div className='iconss'>
             <h5>DATE JOINED</h5>
          <img src={Vectororg} className="user1" alt=""/>
           </div>
         
           {items.map((item) => (
          <ul>
          <li>{item.lastActiveDate}</li></ul>))}
        </div>

        <div className='status'>
          <div className='iconss'>
            <h5>STATUS</h5>
          <img src={Vectororg} className="user1" alt=""/>
          </div>
          <div className='activate'>
             <div className='tatus'>
              <select  className='filter'>
                <option value="pending">Pending</option>
                 <option value="inactive">Inactive</option>
                 
                 <option value="active">Active</option>
                 <option value="blacklisted">Blacklisted</option>
                 
          </select>
          <img src={Dot} className="user1" alt=""/>
          </div>
           <div className='tatus'>
                  <select  className='filter'>
                   <option className="inactive">Inactive</option>
                 <option value="pending">Pending</option>
                 <option value="active">Active</option>
                 <option value="blacklisted">Blacklisted</option>
          </select>
          <img src={Dot} className="user1" alt=""/>
          </div>
          <div className='tatus'>
                  <select  className='filter'>
                    <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                 <option value="pending">Pending</option>
                 
                 <option value="blacklisted">Blacklisted</option>
          </select>
          <img src={Dot} className="user1" alt=""/>

          </div>
          <div className='tatus'>
                  <select  className='filter'>
                    <option value="blacklisted">Blacklisted</option>
                    <option value="inactive">Inactive</option>
                 <option value="pending">Pending</option>
                 <option value="active">Active</option>
                 
          </select>
           <img src={Dot} className="user1" alt=""/>
          </div>
           <div className='tatus'>
                  <select  className='filter'>
                    <option value="inactive">Inactive</option>
                 <option value="pending">Pending</option>
                 <option value="active">Active</option>
                 <option value="blacklisted">Blacklisted</option>  
          </select>
           <img src={Dot} className="user1" alt=""/>
           </div>
           <div className='tatus'>
                  <select  className='filter'>
                <option value="inactive">Inactive</option>
                 <option value="pending">Pending</option>
                 <option value="active">Active</option>
                 <option value="blacklisted">Blacklisted</option>
          </select>
          <img src={Dot} className="user1" alt=""/>
          </div>
           <div className='tatus'>
                  <select  className='filter'>
                    <option value="pending">Pending</option>
                    <option value="inactive">Inactive</option>
                 
                 <option value="active">Active</option>
                 <option value="blacklisted">Blacklisted</option>
          </select>
          <img src={Dot} className="user1" alt=""/>
          </div>
           <div className='tatus'>
                  <select  className='filter'>
                     <option value="blacklisted">Blacklisted</option>
                    <option value="inactive">Inactive</option>
                 <option value="pending">Pending</option>
                 <option value="active">Active</option>
                
          </select>
          <img src={Dot} className="user1" alt=""/>
          </div>

           <div className='tatus'>
                  <select  className='filter'>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                 <option value="pending">Pending</option>
                 
                 <option value="blacklisted">Blacklisted</option>
          </select>
          <img src={Dot} className="user1" alt=""/>
          </div>
           </div>
           {/*{items.map((item) => (
          <ul>
           <li>{item.userName}</li></ul>))}*/}

        </div>
        
        </div>
      
        </div>
    )
  }
}

export default Users