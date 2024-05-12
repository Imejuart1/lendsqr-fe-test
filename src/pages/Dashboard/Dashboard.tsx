import React from 'react';
import Card from '../../components/Card/Card.tsx';
import Table from '../../components/Table/Table.tsx';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
        <h2>User Details</h2>
      <div className="dashboard-cards">
        <Card title="Users" value="2,453" icon="👤" />
        <Card title="Active Users" value="2,453" icon="👥" />
        <Card title="Users with Loans" value="12,453" icon="💰" />
        <Card title="Users with Savings" value="102,453" icon="💳" />
      </div>
      <div className="dashboard-table">
        <h2>User Details</h2>
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
