
import React from 'react';
import './CustomSelect.scss';

interface CustomSelectProps {
  options: number[];
  value: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, value, onChange }) => {
  return (
    <div className="custom-select">
      <select onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <img src='/images/downarrow2.svg' alt="Dropdown" />
    </div>
  );
};

export default CustomSelect;
