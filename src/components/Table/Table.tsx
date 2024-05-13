import React, { useEffect, useState } from 'react';
import './Table.scss';
import Pagination from '../Pagination/Pagination.tsx';

const getUserStatusColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'rgba(57, 205, 98, 1)'; 
    case 'Pending':
      return 'rgba(233, 178, 0, 1)';
    case 'Blacklisted':
      return 'rgba(228, 3, 59, 1)'; 
    case 'Inactive':
      return 'rgba(84, 95, 125, 1)'; 
    default:
      return 'rgba(255, 255, 255, 1)'; 
  }
};

const getUserStatusBackgroundColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'rgba(57, 205, 98, 0.1)';
    case 'Pending':
      return 'rgba(233, 178, 0, 0.1)'; 
    case 'Blacklisted':
      return 'rgba(228, 3, 59, 0.1)'; 
    case 'Inactive':
      return 'rgba(84, 95, 125, 0.1)'; 
    default:
      return 'rgba(255, 255, 255, 1)';
  }
};

const Table: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const [userData, setUserData] = useState([]);
  useEffect(()=>{
    fetch('https://66413bb3a7500fcf1a9fe52e.mockapi.io/API/user/data')
    .then((response)=> response.json())
    .then((data)=> setUserData(data))
    .catch((error) => console.error('Error fetching data:', error))
  },[])

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
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
          {currentUsers.map((user: any, index: number) =>(
                        <tr key={index} className='tr_line'>
                        <td>{user.ORGANIZATION}</td>
                        <td>{user.USERNAME}</td>
                        <td>{user.EMAIL}</td>
                        <td>{user['PHONE NUMBER']}</td>
                        <td>{user['DATE JOINED']}</td>
                        <td >
                        <div style={{ backgroundColor: getUserStatusBackgroundColor(user.STATUS)}} 
                         className={`status ${user.STATUS}`}>
                          <div className='spanstatus'
                          style={{ color: getUserStatusColor(user.STATUS)}} >{user.STATUS}</div>
                          </div>
                        </td>
                        <td><img src='images/dot3.svg' alt="icon" /></td>
                      </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={userData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};



export default Table;
