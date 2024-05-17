import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Hamburger from 'hamburger-react'

interface NavbarProps {
  toggleSidebar: () => void; 
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className='logosearch'>
      <div className="hamburger-icon" onClick={toggleSidebar}>
      <Hamburger />
      </div>
        <div className="logo">
          <img src="/images/Group.webp" alt="Logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search for anything" />
          <div className='search_iconbackgnd'>
          <img src="/images/search.svg" alt="notify" className="search-icon"/>
          </div>
        </div>
      </div>
      <div className="navbar-nav">
  <div className="nav-item">
    <Link to="/docs" className="nav-link">
      Docs
    </Link>
  </div>
  <div className="nav-item_notify">
    <Link to="/notifications" className="nav-link">
      <img src="/images/notify.svg" alt="notify" className='notify'/>
    </Link>
  </div>
  <div className="nav-item">
    <div className="profile">
      <img src="/images/profile_icon.webp" alt="Profile" />
      <div className="profile-info">
        <span className="profile-name">Adedeji</span>
        <img src="/images/dropdown.svg" alt="dropdown" className='drop_icon'/>
      </div>
    </div>
  </div>
</div>

    </nav>
  );
};

export default Navbar;
