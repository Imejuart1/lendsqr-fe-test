// Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

interface SidebarProps {
  isOpen: boolean; 
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {

  return (
    <div className={`sidebar_main ${isOpen ? 'open' : ''}`}>
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="org-switch">
            <img src="/images/switch_org.svg" className="icon_arrow" />
            <span className="switch">Switch Organization</span>
            <img src="/images/downarrow2.svg" className="icon_arrow" />
          </div>
        </div>
        <div className="sidebar-menu">
          <div style={{ marginBottom: '3vw' }}>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
              <img src="/images/home 1.svg" className="dash_icon" />
              Dashboard
            </NavLink>
          </div>
          <div className="section-title">CUSTOMERS</div>
          <NavLink to="/users" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/user-friends 1.svg" className="icon" />
            Users
          </NavLink>
          <NavLink to="/guarantors" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/users 1.svg" className="icon" />
            Guarantors
          </NavLink>
          <NavLink to="/loans" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/loans.svg" className="icon" />
            Loans
          </NavLink>
          <NavLink to="/decision-models" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/handshake-regular 1.svg" className="icon" />
            Decision Models
          </NavLink>
          <NavLink to="/savings" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/piggy-bank 1.svg" className="icon" />
            Savings
          </NavLink>
          <NavLink to="/loan-requests" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/Group 104.svg" className="icon" />
            Loan Requests
          </NavLink>
          <NavLink to="/whitelist" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/user-check 1.svg" className="icon" />
            Whitelist
          </NavLink>
          <NavLink to="/karma" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/user-times 1.svg" className="icon" />
            Karma
          </NavLink>
          <div className="section-title">BUSINESSES</div>
          <NavLink to="/organization" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/switch_org.svg" className="icon" />
            Organization
          </NavLink>
          <NavLink to="/loan-products" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/Group 104.svg" className="icon" />
            Loan Products
          </NavLink>
          <NavLink to="/savings-products" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/sproduc.svg" className="icon" />
            Savings Products
          </NavLink>
          <NavLink to="/fees-and-charges" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/coins-solid 1.svg" className="icon" />
            Fees and Charges
          </NavLink>
          <NavLink to="/transactions" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/icon(1).svg" className="icon" />
            Transactions
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/Vector.svg" className="icon" />
            Services
          </NavLink>
          <NavLink to="/service-account" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/user-cog 1.svg" className="icon" />
            Service Account
          </NavLink>
          <NavLink to="/settlements" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/scroll 1.svg" className="icon" />
            Settlements
          </NavLink>
          <NavLink to="/reports" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/chart-bar 2.svg" className="icon" />
            Reports
          </NavLink>
          <div className="section-title">SETTINGS</div>
          <NavLink to="/preferences" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/sliders-h 1.svg" className="icon" />
            Preferences
          </NavLink>
          <NavLink to="/fees-and-pricing" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/badge-percent 1.svg" className="icon" />
            Fees and Pricing
          </NavLink>
          <NavLink to="/audit-logs" className={({ isActive }) => isActive ? 'active-link' : 'reactive-link'}>
            <img src="/images/clipboard-list 1.svg" className="icon" />
            Audit Logs
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
