import React from 'react';
import Card from '../../components/Card/Card';
import Table from '../../components/Table/Table';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
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
