import React, { useEffect, useState } from 'react';
import './Table.scss';
import Pagination from '../Pagination/Pagination.tsx';
import MoreInfoPopup from '../moreinfo/MoreInfoPopup.tsx';

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
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [userData, setUserData] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch('https://66413bb3a7500fcf1a9fe52e.mockapi.io/API/user/data')
      .then((response) => response.json())
      .then((data) => setUserData(data.map((user, index) => ({...user, positionX: 0, positionY: 0}))))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    setCurrentPage(1); // Reset currentPage when usersPerPage changes
  }, [usersPerPage]);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  const handleItemsPerPageChange = (perPage: number) => setUsersPerPage(perPage);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);

  const handleMoreInfoClick = (user: any, event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setSelectedUser({...user});
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

  return (
    <div>
      <div className="lendsqr-table">
        <table className="table">
          <thead>
            <tr>
              <th>
                ORGANIZATION
                <img src="/images/filter-results-button.svg" alt="Filter icon" />
              </th>
              <th>
                USERNAME
                <img src="/images/filter-results-button.svg" alt="Filter icon" />
              </th>
              <th>
                EMAIL
                <img src="/images/filter-results-button.svg" alt="Filter icon" />
              </th>
              <th>
                PHONE NUMBER
                <img src="/images/filter-results-button.svg" alt="Filter icon" />
              </th>
              <th>
                DATE JOINED
                <img src="/images/filter-results-button.svg" alt="Filter icon" />
              </th>
              <th>
                STATUS
                <img src="/images/filter-results-button.svg" alt="Filter icon" />
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
                <td>{user['PHONE NUMBER']}</td>
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
        <MoreInfoPopup
          user={selectedUser}
          onClose={handleClosePopup}
          onBlacklist={handleBlacklistUser}
          onActivate={handleActivateUser}
          positionX={popupPosition.x}
          positionY={popupPosition.y}
        />
      )}
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={userData.length}
        paginate={handlePageChange}
        currentPage={currentPage}
        changeItemsPerPage={handleItemsPerPageChange}
      />
    </div>
  );
};

export default Table;
