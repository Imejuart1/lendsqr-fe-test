import React from 'react';
import Card from '../../components/Card/Card.tsx';
import Table from '../../components/Table/Table.tsx';
import './Dashboard.scss';
import UsersIcon from '../../assets/images/users.svg';
import ActiveUsersIcon from '../../assets/images/active-users.svg';
import UsersWithLoansIcon from '../../assets/images/users-with-loans.svg';
import UsersWithSavingsIcon from '../../assets/images/users-with-savings.svg';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className='dashboard_main'>
        <h2>Users</h2>
      <div className="dashboard-cards">
      <Card title="Users" value="2,453" icon={UsersIcon} />
        <Card title="Active Users" value="2,453" icon={ActiveUsersIcon} />
        <Card title="Users with Loans" value="12,453" icon={UsersWithLoansIcon} />
        <Card title="Users with Savings" value="102,453" icon={UsersWithSavingsIcon} />
      </div>
      <div className="dashboard-table">

        <Table />
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
