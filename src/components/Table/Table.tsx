import React, { useEffect, useState } from 'react';
import './Table.scss';

const Table: React.FC = () => {
  const [userData, setUserData] = useState([]);
  useEffect(()=>{
    fetch('https://66413bb3a7500fcf1a9fe52e.mockapi.io/API/user/data')
    .then((response)=> response.json())
    .then((data)=> setUserData(data))
    .catch((error) => console.error('Error fetching data:', error))
  },[])
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
            <th></th> 
          </tr>
        </thead>
        <tbody>
          {userData.map((user: any, index: number) =>(
                        <tr key={index} className='tr_line'>
                        <td>{user.ORGANIZATION}</td>
                        <td>{user.USERNAME}</td>
                        <td>{user.EMAIL}</td>
                        <td>{user['PHONE NUMBER']}</td>
                        <td>{user['DATE JOINED']}</td>
                        <td style={{ backgroundColor: getUserStatusColor(user.STATUS)}}
                        className='status'>{user.STATUS}</td>
                        <td><img src='images/dot3.svg' alt="icon" /></td>
                      </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getUserStatusColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'rgba(144, 238, 144, 0.2)'; // Green
    case 'Pending':
      return 'rgba(255, 255, 0, 0.2)'; // Yellow
    case 'Blacklisted':
      return 'rgba(255, 99, 71, 0.2)'; // Red
    case 'Inactive':
      return 'rgba(169, 169, 169, 0.2)'; // Grey
    default:
      return 'rgba(255, 255, 255, 1)'; // White
  }
};

export default Table;
