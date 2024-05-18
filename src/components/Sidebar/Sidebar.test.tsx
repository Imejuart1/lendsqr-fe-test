import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './Sidebar';

const sidebarProps = {
  isOpen: true,
};

describe('Sidebar', () => {
  it('renders correctly when open', () => {
    render(
      <MemoryRouter>
        <Sidebar {...sidebarProps} />
      </MemoryRouter>
    );

    expect(screen.getByText('Switch Organization')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Customers')).toBeInTheDocument();
    expect(screen.getByText('BUSINESSES')).toBeInTheDocument();
    expect(screen.getByText('SETTINGS')).toBeInTheDocument();
  });

  it('renders correctly when closed', () => {
    render(
      <MemoryRouter>
        <Sidebar isOpen={false} />
      </MemoryRouter>
    );

    expect(screen.queryByText('Switch Organization')).not.toBeInTheDocument();
    expect(screen.queryByText('Dashboard')).not.toBeInTheDocument();
    expect(screen.queryByText('Customers')).not.toBeInTheDocument();
    expect(screen.queryByText('BUSINESSES')).not.toBeInTheDocument();
    expect(screen.queryByText('SETTINGS')).not.toBeInTheDocument();
  });

  it('activates links correctly', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Sidebar {...sidebarProps} />
      </MemoryRouter>
    );

    const activeLink = screen.getByText('Dashboard');
    expect(activeLink).toHaveClass('active-link');
  });

  it('toggles sidebar on and off', () => {
    const { rerender } = render(
      <MemoryRouter>
        <Sidebar isOpen={false} />
      </MemoryRouter>
    );

    expect(screen.queryByText('Switch Organization')).not.toBeInTheDocument();

    // Open sidebar
    rerender(
      <MemoryRouter>
        <Sidebar isOpen={true} />
      </MemoryRouter>
    );

    expect(screen.getByText('Switch Organization')).toBeInTheDocument();

    // Close sidebar
    rerender(
      <MemoryRouter>
        <Sidebar isOpen={false} />
      </MemoryRouter>
    );

    expect(screen.queryByText('Switch Organization')).not.toBeInTheDocument();
  });
});
