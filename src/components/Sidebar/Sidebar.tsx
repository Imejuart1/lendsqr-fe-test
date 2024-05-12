import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillGrid1X2Fill, BsPeopleFill, BsClipboardData, BsGearFill } from 'react-icons/bs';
import { FiUsers, FiTrendingUp, FiDollarSign, FiSettings, FiChevronDown } from 'react-icons/fi';
import './Sidebar.scss';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="org-switch">
          <img src="/images/switch_org.svg" alt="switch_org" />
          <span className="switch">Switch Organization</span>
          <img src="/images/downarrow2.svg" className="icon" />
        </div>
      </div>
      <div className="sidebar-menu">
        <Link to="/dashboard">
          <BsFillGrid1X2Fill className="icon" />
          Dashboard
        </Link>
        <div className="section-title">CUSTOMERS</div>
        <Link to="/users">
          <FiUsers className="icon" />
          Users
        </Link>
        <Link to="/guarantors">
          <BsPeopleFill className="icon" />
          Guarantors
        </Link>
        <Link to="/loans">
          <BsClipboardData className="icon" />
          Loans
        </Link>
        <Link to="/decision-models">
          <FiTrendingUp className="icon" />
          Decision Models
        </Link>
        <Link to="/savings">
          <FiDollarSign className="icon" />
          Savings
        </Link>
        <Link to="/loan-requests">
          <BsClipboardData className="icon" />
          Loan Requests
        </Link>
        <Link to="/whitelist">
          <BsFillGrid1X2Fill className="icon" />
          Whitelist
        </Link>
        <Link to="/karma">
          <BsClipboardData className="icon" />
          Karma
        </Link>
        <div className="section-title">BUSINESSES</div>
        <Link to="/organization">
          <BsPeopleFill className="icon" />
          Organization
        </Link>
        <Link to="/loan-products">
          <BsClipboardData className="icon" />
          Loan Products
        </Link>
        <Link to="/savings-products">
          <BsClipboardData className="icon" />
          Savings Products
        </Link>
        <Link to="/fees-and-charges">
          <BsClipboardData className="icon" />
          Fees and Charges
        </Link>
        <Link to="/transactions">
          <BsClipboardData className="icon" />
          Transactions
        </Link>
        <Link to="/services">
          <BsClipboardData className="icon" />
          Services
        </Link>
        <Link to="/service-account">
          <BsClipboardData className="icon" />
          Service Account
        </Link>
        <Link to="/settlements">
          <BsClipboardData className="icon" />
          Settlements
        </Link>
        <Link to="/reports">
          <BsClipboardData className="icon" />
          Reports
        </Link>
        <div className="section-title">SETTINGS</div>
        <Link to="/preferences">
          <FiSettings className="icon" />
          Preferences
        </Link>
        <Link to="/fees-and-pricing">
          <BsClipboardData className="icon" />
          Fees and Pricing
        </Link>
        <Link to="/audit-logs">
          <BsClipboardData className="icon" />
          Audit Logs
        </Link>
      </div>/
    </div>
  );
};

export default Sidebar;
