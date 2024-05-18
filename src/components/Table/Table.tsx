import React, { useEffect, useState, useRef } from 'react';
import './Table.scss';
import Pagination from '../Pagination/Pagination.tsx';
import MoreInfoPopup from '../moreinfo/MoreInfoPopup.tsx';
import FilterPopup from '../Filter/FilterPopup.tsx';

const Table: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [userData, setUserData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [filterPopupPosition, setFilterPopupPosition] = useState({ x: 0, y: 0 });
  const [filterCriteria, setFilterCriteria] = useState({
    organization: '',
    searchUsername: '',
    searchEmail: '',
    searchPhoneNumber: '',
    searchDateJoined: '',
    searchStatus: ''
  });
  useEffect(() => {
    fetch('https://66413bb3a7500fcf1a9fe52e.mockapi.io/API/user/data')
      .then((response) => response.json())
      .then((data) => setUserData(data.map(user => ({ ...user })))) // Remove positionX and positionY
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
  useEffect(() => {
    setFilteredData(userData);
  }, [userData]);

  useEffect(() => {
    setCurrentPage(1);
  }, [usersPerPage]);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  const handleItemsPerPageChange = (perPage: number) => setUsersPerPage(perPage);

  useEffect(() => {
    const filtered = userData.filter(user => {
      return user.ORGANIZATION.toLowerCase().includes(filterCriteria.organization.toLowerCase())
        && user.USERNAME.toLowerCase().includes(filterCriteria.searchUsername.toLowerCase())
        && user.EMAIL.toLowerCase().includes(filterCriteria.searchEmail.toLowerCase())
        && user['PHONE NUMBER'].toLowerCase().includes(filterCriteria.searchPhoneNumber.toLowerCase())
        && user['DATE JOINED'].toLowerCase().includes(filterCriteria.searchDateJoined.toLowerCase())
        && user.STATUS.toLowerCase().includes(filterCriteria.searchStatus.toLowerCase());
    });
    setFilteredData(filtered);
  }, [userData, filterCriteria]);
  
  const handleUpdateFilterCriteria = (criteria: any) => {
   
    if (Object.values(criteria).every(value => value === '' || value === null)) {
      setFilteredData(userData);
    }else{
      setFilterCriteria(criteria);
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredData.slice(indexOfFirstUser, indexOfLastUser);

  const handleMoreInfoClick = (user: any, event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setSelectedUser({ ...user });
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setPopupPosition({ x: rect.left - 120, y: rect.top + 40 });
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
  };

  const handleBlacklistUser = () => {
    // Code to blacklist user
    handleClosePopup();
  };

  const handleActivateUser = () => {
    // Code to activate user
    handleClosePopup();
  };

  const handleFilterIconClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setFilterPopupPosition({ x: rect.left, y: rect.top + 40 });
    setShowFilterPopup(true);
  };

  return (
    <div>
      <div className="filter-button-container">
      </div>
      <div className="lendsqr-table">
        <table className="table">
          <thead>
            <tr>
              <th>
                ORGANIZATION
                <img src="/images/filter-results-button.svg" alt="Filter icon" 
                      onClick={handleFilterIconClick} />
              </th>
              <th>
                USERNAME
                <img src="/images/filter-results-button.svg" alt="Filter icon" 
                      onClick={handleFilterIconClick} />
              </th>
              <th>
                EMAIL
                <img src="/images/filter-results-button.svg" alt="Filter icon" 
                      onClick={handleFilterIconClick} />
              </th>
              <th>
                PHONE NUMBER
                <img src="/images/filter-results-button.svg" alt="Filter icon" 
                      onClick={handleFilterIconClick} />
              </th>
              <th>
                DATE JOINED
                <img src="/images/filter-results-button.svg" alt="Filter icon" 
                      onClick={handleFilterIconClick} />
              </th>
              <th>
                STATUS
                <img src="/images/filter-results-button.svg" alt="Filter icon" 
                      onClick={handleFilterIconClick} />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user: any, index: number) => (
              <tr key={index} className="tr_line">
                <td>{user.ORGANIZATION}</td>
                <td>{user.USERNAME}</td>
                <td>{user.EMAIL}</td>
                <td>0{user['PHONE NUMBER']}</td>
                <td>{user['DATE JOINED']}</td>
                <td>
                  <div
                    style={{ backgroundColor: getUserStatusBackgroundColor(user.STATUS) }}
                    className={`status ${user.STATUS}`}
                  >
                    <div style={{ color: getUserStatusColor(user.STATUS) }}>{user.STATUS}</div>
                  </div>
                </td>
                <td>
                  <img
                    src="/images/dot3.svg"
                    alt="More options"
                    onClick={(event) => handleMoreInfoClick(user, event)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedUser && (
        <div>
          <MoreInfoPopup
            user={selectedUser}
            onClose={handleClosePopup}
            onBlacklist={handleBlacklistUser}
            onActivate={handleActivateUser}
            positionX={popupPosition.x}
            positionY={popupPosition.y}
          />
        </div>
      )}
      {showFilterPopup && (
        <div >
          <FilterPopup
            onClose={() => setShowFilterPopup(false)}
            filterCriteria={filterCriteria}
            updateFilterCriteria={handleUpdateFilterCriteria}
            positionX={filterPopupPosition.x}
            positionY={filterPopupPosition.y}
          />
        </div>
      )}
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={filteredData.length}
        paginate={handlePageChange}
        currentPage={currentPage}
        changeItemsPerPage={handleItemsPerPageChange}
      />
    </div>
  );
};

export default Table;

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
