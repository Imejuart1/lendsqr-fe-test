import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders Dashboard component', () => {
    act(() => {
      render(<Dashboard />);
    });
    expect(screen.getAllByText('Users')).toHaveLength(2);
    expect(screen.getAllByText('Active Users')).toHaveLength(1);
    expect(screen.getAllByText('Users with Loans')).toHaveLength(1);
    expect(screen.getAllByText('Users with Savings')).toHaveLength(1);
  });
  
test('renders Card components with correct values', () => {
  act(() => {
    render(<Dashboard />);
  });
  expect(screen.getAllByText('2,453')).toHaveLength(2);
  expect(screen.getAllByText('12,453')).toHaveLength(1);
  expect(screen.getAllByText('102,453')).toHaveLength(1);
});

test('renders Table component', () => {
  act(() => {
    render(<Dashboard />);
  });
  expect(screen.getByRole('table')).toBeInTheDocument();
});
