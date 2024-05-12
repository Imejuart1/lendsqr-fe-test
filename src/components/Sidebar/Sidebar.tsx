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
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard">
            <BsFillGrid1X2Fill className="icon" />
            Dashboard
          </Link>
        </li>
        <li className="section-title">Customers</li>
        <li>
          <Link to="/users">
            <FiUsers className="icon" />
            Users
          </Link>
        </li>
        <li>
          <Link to="/guarantors">
            <BsPeopleFill className="icon" />
            Guarantors
          </Link>
        </li>
        <li>
          <Link to="/loans">
            <BsClipboardData className="icon" />
            Loans
          </Link>
        </li>
        <li>
          <Link to="/decision-models">
            <FiTrendingUp className="icon" />
            Decision Models
          </Link>
        </li>
        <li>
          <Link to="/savings">
            <FiDollarSign className="icon" />
            Savings
          </Link>
        </li>
        <li>
          <Link to="/loan-requests">
            <BsClipboardData className="icon" />
            Loan Requests
          </Link>
        </li>
        <li>
          <Link to="/whitelist">
            <BsFillGrid1X2Fill className="icon" />
            Whitelist
          </Link>
        </li>
        <li>
          <Link to="/karma">
            <BsClipboardData className="icon" />
            Karma
          </Link>
        </li>
        <li className="section-title">Businesses</li>
        <li>
          <Link to="/organization">
            <BsPeopleFill className="icon" />
            Organization
          </Link>
        </li>
        <li>
          <Link to="/loan-products">
            <BsClipboardData className="icon" />
            Loan Products
          </Link>
        </li>
        <li>
          <Link to="/savings-products">
            <BsClipboardData className="icon" />
            Savings Products
          </Link>
        </li>
        <li>
          <Link to="/fees-and-charges">
            <BsClipboardData className="icon" />
            Fees and Charges
          </Link>
        </li>
        <li>
          <Link to="/transactions">
            <BsClipboardData className="icon" />
            Transactions
          </Link>
        </li>
        <li>
          <Link to="/services">
            <BsClipboardData className="icon" />
            Services
          </Link>
        </li>
        <li>
          <Link to="/service-account">
            <BsClipboardData className="icon" />
            Service Account
          </Link>
        </li>
        <li>
          <Link to="/settlements">
            <BsClipboardData className="icon" />
            Settlements
          </Link>
        </li>
        <li>
          <Link to="/reports">
            <BsClipboardData className="icon" />
            Reports
          </Link>
        </li>
        <li className="section-title">Settings</li>
        <li>
          <Link to="/preferences">
            <FiSettings className="icon" />
            Preferences
          </Link>
        </li>
        <li>
          <Link to="/fees-and-pricing">
            <BsClipboardData className="icon" />
            Fees and Pricing
          </Link>
        </li>
        <li>
          <Link to="/audit-logs">
            <BsClipboardData className="icon" />
            Audit Logs
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
