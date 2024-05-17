import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
  dateJoined: Date | null;
  status: string;
}

const FilterPopup: React.FC<FilterPopupProps> = ({ onClose, onFilter }) => {
  const [filters, setFilters] = useState<Filters>({
    organization: '',
    username: '',
    email: '',
    phoneNumber: '',
    dateJoined: null,
    status: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string) => {
    setFilters({ ...filters, [field]: e.target.value });
  };

  const handleDateChange = (date: Date | null) => {
    setFilters({ ...filters, dateJoined: date });
  };

  const handleFilter = () => {
    onFilter(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      organization: '',
      username: '',
      email: '',
      phoneNumber: '',
      dateJoined: null,
      status: '',
    });
  };

  return (
    <div className="filter-popup">
      <div className="filter-popup-content">
        <div className="filter-field">
          <label htmlFor="organization">Organization:</label>
          <div className="custo-select">
            <select
              id="organization"
              value={filters.organization}
              onChange={(e) => handleChange(e, 'organization')}
            >
              <option value="">Select</option>
              <option value="Lendsqr">Lendsqr</option>
              <option value="Irorrun">Irorrun</option>
            </select>
            <img src="/images/downarrow2.svg" alt="Dropdown" />
          </div>
        </div>
        <div className="filter-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={filters.username}
            onChange={(e) => handleChange(e, 'username')}
            placeholder="Username"
          />
        </div>
        <div className="filter-field">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={filters.email}
            onChange={(e) => handleChange(e, 'email')}
            placeholder="Email"
          />
        </div>
        <div className="filter-field">
          <label htmlFor="dateJoined">Date:</label>
          <div className="custom-date-picker">
            <DatePicker
              selected={filters.dateJoined}
              onChange={handleDateChange}
              placeholderText="Select date"
              dateFormat="yyyy/MM/dd"
              className="date-picker-input"
            />
            <img src="/images/calender.svg" alt="Calendar" />
          </div>
        </div>
        <div className="filter-field">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={filters.phoneNumber}
            onChange={(e) => handleChange(e, 'phoneNumber')}
            placeholder="Phone Number"
          />
        </div>
        <div className="filter-field">
          <label htmlFor="status">Status:</label>
          <div className="custo-select">
            <select
              id="status"
              value={filters.status}
              onChange={(e) => handleChange(e, 'status')}
            >
              <option value="">Select</option>
              <option value="Pending">Pending</option>
              <option value="Active">Active</option>
              <option value="InActive">InActive</option>
              <option value="Blacklisted">Blacklisted</option>
            </select>
            <img src="/images/downarrow2.svg" alt="Dropdown" />
          </div>
        </div>
        <div className="filter-buttons">
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleFilter}>Filter</button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
