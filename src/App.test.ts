import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders dashboard when logged in', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const dashboardElement = screen.getByText(/Dashboard/i);
  expect(dashboardElement).toBeInTheDocument();
});

test('renders login page when not logged in', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const loginElement = screen.getByText(/Login/i);
  expect(loginElement).toBeInTheDocument();
});
