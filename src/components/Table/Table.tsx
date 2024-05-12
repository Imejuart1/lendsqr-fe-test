import React from 'react';
import './Table.scss';

const Table: React.FC = () => {
  return (
    <div className='lendsqr-table'>
      <table className="table">
        <thead>
          <tr>
            <th>
              <span>ORGANIZATION</span>
              <img src='/images/filter-results-button.svg' alt="Filter icon" />
            </th>
            <th>
              USERNAME
              <img src='/images/filter-results-button.svg' alt="Filter icon" />
            </th>
            <th>
              EMAIL
              <img src='/images/filter-results-button.svg' alt="Filter icon" />
            </th>
            <th>
              PHONE NUMBER
              <img src='/images/filter-results-button.svg' alt="Filter icon" />
            </th>
            <th>
              DATE JOINED
              <img src='/images/filter-results-button.svg' alt="Filter icon" />
            </th>
            <th>
              STATUS
              <img src='/images/filter-results-button.svg' alt="Filter icon" />
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Your table rows go here */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
