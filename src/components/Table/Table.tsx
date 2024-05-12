import React from 'react';
import './Table.scss';

const Table: React.FC = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ORGANIZATION</th>
          <th>USERNAME</th>
          <th>EMAIL</th>
          <th>PHONE NUMBER</th>
          <th>DATE JOINED</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {/* Your table rows go here */}
      </tbody>
    </table>
  );
};

export default Table;
