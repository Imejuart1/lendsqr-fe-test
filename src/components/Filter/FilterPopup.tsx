import React, { useState } from 'react';
import './FilterPopup.scss';

interface FilterPopupProps {
  onClose: () => void;
  onFilter: (filters: Filters) => void;
}

interface Filters {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

const FilterPopup: React.FC<FilterPopupProps> = ({ onClose, onFilter }) => {
  const [filters, setFilters] = useState<Filters>({
    organization: '',
    username: '',
    email: '',
    phoneNumber: '',
    dateJoined: '',
    status: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setFilters({ ...filters, [field]: e.target.value });
  };

  const handleFilter = () => {
    onFilter(filters);
    onClose();
  };

  return (
    <div className="filter-popup">
      <div className="filter-popup-content">
        <h2>Filter</h2>
        <div className="filter-field">
          <label htmlFor="organization">Organization:</label>
          <input
            type="text"
            id="organization"
            value={filters.organization}
            onChange={(e) => handleChange(e, 'organization')}
          />
        </div>
        <div className="filter-field">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={filters.username}
            onChange={(e) => handleChange(e, 'username')}
          />
        </div>
        <div className="filter-field">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={filters.email}
            onChange={(e) => handleChange(e, 'email')}
          />
        </div>
        <div className="filter-field">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={filters.phoneNumber}
            onChange={(e) => handleChange(e, 'phoneNumber')}
          />
        </div>
        <div className="filter-field">
          <label htmlFor="dateJoined">Date Joined:</label>
          <input
            type="text"
            id="dateJoined"
            value={filters.dateJoined}
            onChange={(e) => handleChange(e, 'dateJoined')}
          />
        </div>
        <div className="filter-field">
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            value={filters.status}
            onChange={(e) => handleChange(e, 'status')}
          />
        </div>
        <div className="filter-buttons">
          <button onClick={handleFilter}>Apply Filter</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
