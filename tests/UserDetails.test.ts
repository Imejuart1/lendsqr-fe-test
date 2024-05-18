import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserDetails from '../src/pages/UserDetails/UserDetails.tsx';

// Mock the react-router-dom hooks
jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  useNavigate: jest.fn()
}));

describe('UserDetails Component', () => {
  test('renders user details with default data if no user is provided', () => {
    // Mock location state with no user
    const mockLocation = { state: null };
    // Mock useLocation hook to return mockLocation
    jest.spyOn(require('react-router-dom'), 'useLocation').mockReturnValue(mockLocation);

    const { getByText } = render(<UserDetails/>);

    // Check if default user details are rendered
    expect(getByText(/Grace Effiom/i)).toBeInTheDocument();
    expect(getByText(/grace@lendstar.com/i)).toBeInTheDocument();
    expect(getByText(/7060780922/i)).toBeInTheDocument();
    expect(getByText(/Apr 30, 2020 10:00 AM/i)).toBeInTheDocument();
    expect(getByText(/Blacklisted/i)).toBeInTheDocument();
  });

  test('renders user details with provided user', () => {
    // Mock location state with user
    const mockUser = {
      "ORGANIZATION": "TestOrg",
      "USERNAME": "Test User",
      "EMAIL": "test@test.com",
      "PHONE NUMBER": "123456789",
      "DATE JOINED": "Jan 1, 2022 12:00 PM",
      "STATUS": "Active"
    };
    const mockLocation = { state: { user: mockUser } };
    jest.spyOn(require('react-router-dom'), 'useLocation').mockReturnValue(mockLocation);

    const { getByText } = render(<UserDetails />);

    // Check if provided user details are rendered
    expect(getByText(/Test User/i)).toBeInTheDocument();
    expect(getByText(/test@test.com/i)).toBeInTheDocument();
    expect(getByText(/123456789/i)).toBeInTheDocument();
    expect(getByText(/Jan 1, 2022 12:00 PM/i)).toBeInTheDocument();
    expect(getByText(/Active/i)).toBeInTheDocument();
  });

  test('switches to "General Details" tab by default', () => {
    const { getByText } = render(<UserDetails />);

    // Check if "General Details" tab is active by default
    expect(getByText(/General Details/i)).toHaveClass('active');
  });

  // Add more tests for other component behaviors as needed
});
