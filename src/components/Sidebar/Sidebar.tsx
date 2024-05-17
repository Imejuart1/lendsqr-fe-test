import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillGrid1X2Fill, BsPeopleFill, BsClipboardData, BsGearFill } from 'react-icons/bs';
import { FiUsers, FiTrendingUp, FiDollarSign, FiSettings, FiChevronDown } from 'react-icons/fi';
import './Sidebar.scss';

const Sidebar: React.FC = () => {
  return (
    <div className='sidebar_main'>
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="org-switch">
          <img src="/images/switch_org.svg" className="icon_arrow" />
          <span className="switch">Switch Organization</span>
          <img src="/images/downarrow2.svg" className="icon_arrow" />
        </div>
      </div>
      <div className="sidebar-menu">
        <Link to="/dashboard">
        <img src="/images/home 1.svg" className="dash_icon" />
          Dashboard
        </Link>
        <div className="section-title">CUSTOMERS</div>
        <Link to="/users">
        <img src="/images/user-friends 1.svg" className="icon" />

          Users
        </Link>
        <Link to="/guarantors">
        <img src="/images/users 1.svg" className="icon" />
          Guarantors
        </Link>
        <Link to="/loans">
        <img src="/images/loans.svg" className="icon" />
          Loans
        </Link>
        <Link to="/decision-models">
        <img src="/images/handshake-regular 1.svg" className="icon" />
          Decision Models
        </Link>
        <Link to="/savings">
        <img src="/images/piggy-bank 1.svg" className="icon" />
          Savings
        </Link>
        <Link to="/loan-requests">
        <img src="/images/Group 104.svg" className="icon" />
          Loan Requests
        </Link>
        <Link to="/whitelist">
        <img src="/images/user-check 1.svg" className="icon" />
          Whitelist
        </Link>
        <Link to="/karma">
        <img src="/images/user-times 1.svg" className="icon" />
          Karma
        </Link>
        <div className="section-title">BUSINESSES</div>
        <Link to="/organization">
        <img src="/images/switch_org.svg"  className="icon"/>
          Organization
        </Link>
        <Link to="/loan-products">
        <img src="/images/Group 104.svg" className="icon" />
          Loan Products
        </Link>
        <Link to="/savings-products">
        <img src="/images/sproduc.svg" className="icon" />
          Savings Products
        </Link>
        <Link to="/fees-and-charges">
        <img src="/images/coins-solid 1.svg" className="icon" />
          Fees and Charges
        </Link>
        <Link to="/transactions">
        <img src="/images/icon(1).svg" className="icon" />
          Transactions
        </Link>
        <Link to="/services">
        <img src="/images/Vector.svg" className="icon" />
          Services
        </Link>
        <Link to="/service-account">
        <img src="/images/user-cog 1.svg" className="icon" />
          Service Account
        </Link>
        <Link to="/settlements">
        <img src="/images/scroll 1.svg" className="icon" />
          Settlements
        </Link>
        <Link to="/reports">
        <img src="/images/chart-bar 2.svg" className="icon" />
          Reports
        </Link>
        <div className="section-title">SETTINGS</div>
        <Link to="/preferences">
        <img src="/images/sliders-h 1.svg" className="icon" />
          Preferences
        </Link>
        <Link to="/fees-and-pricing">
        <img src="/images/badge-percent 1.svg" className="icon" />
          Fees and Pricing
        </Link>
        <Link to="/audit-logs">
        <img src="/images/clipboard-list 1.svg" className="icon" />
          Audit Logs
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
