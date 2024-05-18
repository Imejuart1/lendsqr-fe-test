import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';

import App from './App';

describe('App component', () => {
  it('renders Navbar and Sidebar when not on the homepage', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('does not render Navbar and Sidebar on the homepage', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.queryByTestId('navbar')).not.toBeInTheDocument();
    expect(screen.queryByTestId('sidebar')).not.toBeInTheDocument();
  });

  it('navigates to Dashboard page when /dashboard route is accessed', () => {
    const history = createMemoryHistory();
    history.push('/dashboard'); // Directly set route before rendering
    render(
      <Router navigator={history} location={history.location}> {/* Add location property */}
        <App />
      </Router>
    );
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });
  
  it('navigates to Users page when /users route is accessed', () => {
    const history = createMemoryHistory();
    history.push('/users'); // Directly set route before rendering
    render(
      <Router navigator={history} location={history.location}>
        <App />
      </Router>
    );
    expect(screen.queryByText(/Users/i)).toBeInTheDocument();
  });
  
  
  
  

  // Add more tests for other routes if needed
});
