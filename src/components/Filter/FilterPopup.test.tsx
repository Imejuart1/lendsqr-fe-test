import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterPopup from './FilterPopup';

const mockOnClose = jest.fn();
const mockUpdateFilterCriteria = jest.fn();

const filterCriteria = {
  organization: '',
  searchUsername: '',
  searchEmail: '',
  searchPhoneNumber: '',
  searchDateJoined: null,
  searchStatus: '',
};

describe('FilterPopup', () => {
  beforeEach(() => {
    render(
      <FilterPopup
        onClose={mockOnClose}
        positionX={100}
        positionY={100}
        filterCriteria={filterCriteria}
        updateFilterCriteria={mockUpdateFilterCriteria}
      />
    );
  });

  test('renders FilterPopup component', () => {
    expect(screen.getByText('Organization:')).toBeInTheDocument();
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText('Date:')).toBeInTheDocument();
    expect(screen.getByText('Phone Number:')).toBeInTheDocument();
    expect(screen.getByText('Status:')).toBeInTheDocument();
  });

  test('handles input changes', () => {
    const usernameInput = screen.getByPlaceholderText('Username');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    expect(mockUpdateFilterCriteria).toHaveBeenCalledWith({
      ...filterCriteria,
      searchUsername: 'testuser',
    });
  });

  test('handles date change', () => {
    const datePickerInput = screen.getByPlaceholderText('Select date');
    fireEvent.change(datePickerInput, { target: { value: '2023-05-18' } });
    // Note: React DatePicker uses a more complex method to handle date changes,
    // which might require additional setup for full testing coverage.
  });

  test('resets filters', () => {
    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton);
    expect(mockUpdateFilterCriteria).toHaveBeenCalledWith({
      organization: '',
      searchUsername: '',
      searchEmail: '',
      searchPhoneNumber: '',
      searchDateJoined: null,
      searchStatus: '',
    });
  });

  test('closes popup on filter button click', () => {
    const filterButton = screen.getByText('Filter');
    fireEvent.click(filterButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  test('closes popup on outside click', () => {
    fireEvent.mouseDown(document);
    expect(mockOnClose).toHaveBeenCalled();
  });
});
