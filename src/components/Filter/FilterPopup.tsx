import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './FilterPopup.scss';

interface FilterPopupProps {
  onClose: () => void;
  positionX: number;
  positionY: number;
  filterCriteria: any;
  updateFilterCriteria: (criteria: any) => void;
}

interface Filters {
  organization: string;
  searchUsername: string;
  searchEmail: string;
  searchPhoneNumber: string;
  searchDateJoined: Date | null;
  searchStatus: string;
}

const FilterPopup: React.FC<FilterPopupProps> = ({ onClose, positionX, positionY, filterCriteria, updateFilterCriteria }) => {
  const filterRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const [filters, setFilters] = useState<Filters>({
    organization: '',
    searchUsername: '',
    searchEmail: '',
    searchPhoneNumber: '',
    searchDateJoined: null,
    searchStatus: '',
  });

  useEffect(() => {
    setFilters({
      organization: filterCriteria.organization,
      searchUsername: filterCriteria.searchUsername,
      searchEmail: filterCriteria.searchEmail,
      searchPhoneNumber: filterCriteria.searchPhoneNumber,
      searchDateJoined: filterCriteria.searchDateJoined,
      searchStatus: filterCriteria.searchStatus,
    });
  }, [filterCriteria]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    updateFilterCriteria({ ...filterCriteria, [field]: e.target.value });
  };

  const handleDateChange = (date: Date | null) => {
    setFilters({ ...filters, searchDateJoined: date });
  };

  const handleFilter = () => {
    onClose();
  };

  const handleReset = () => {
    const resetFilters = {
      organization: '',
      searchUsername: '',
      searchEmail: '',
      searchPhoneNumber: '',
      searchDateJoined: null,
      searchStatus: '',
    };
    setFilters(resetFilters);
    updateFilterCriteria(resetFilters);
  };

  useEffect(() => {
    if (filterRef.current) {
      filterRef.current.style.left = `${positionX}px`;
      filterRef.current.style.top = `${positionY}px`;

      const handleClickOutside = (event: MouseEvent) => {
        if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
          onClose();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [positionX, positionY, onClose]);

  const handleMouseDown = (event: React.MouseEvent) => {
    setDragging(true);
    setStartX(event.clientX - positionX);
    setStartY(event.clientY - positionY);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (dragging) {
      const newX = event.clientX - startX;
      const newY = event.clientY - startY;
      filterRef.current!.style.left = `${newX}px`;
      filterRef.current!.style.top = `${newY}px`;
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  return (
    <div className="filter-popup" ref={filterRef} onMouseDown={handleMouseDown}>
      
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
              <option value="Irorun">Irorun</option>
            </select>
            <img src="/images/downarrow2.svg" alt="Dropdown" />
          </div>
        </div>
        <div className="filter-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={filters.searchUsername}
            onChange={(e) => handleChange(e, 'searchUsername')}
            placeholder="Username"
          />
        </div>
        <div className="filter-field">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={filters.searchEmail}
            onChange={(e) => handleChange(e, 'searchEmail')}
            placeholder="Email"
          />
        </div>
        <div className="filter-field">
          <label htmlFor="dateJoined">Date:</label>
          <div className="custom-date-picker">
            <DatePicker
              selected={filters.searchDateJoined}
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
            value={filters.searchPhoneNumber}
            onChange={(e) => handleChange(e, 'searchPhoneNumber')}
            placeholder="Phone Number"
          />
        </div>
        <div className="filter-field">
          <label htmlFor="status">Status:</label>
          <div className="custo-select">
            <select
              id="status"
              value={filters.searchStatus}
              onChange={(e) => handleChange(e, 'searchStatus')}
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
