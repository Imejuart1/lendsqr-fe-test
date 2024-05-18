import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

const mockToggleSidebar = jest.fn();

describe('Navbar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = () => {
    return render(
      <MemoryRouter>
        <Navbar toggleSidebar={mockToggleSidebar} />
      </MemoryRouter>
    );
  };

  it('renders correctly', () => {
    renderComponent();

    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search for anything')).toBeInTheDocument();
    expect(screen.getByText('Docs')).toBeInTheDocument();
    expect(screen.getByAltText('notify')).toBeInTheDocument();
    expect(screen.getByAltText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Adedeji')).toBeInTheDocument();
  });

  it('toggles search input visibility when hamburger icon is clicked', () => {
    renderComponent();

    const hamburgerIcon = screen.getByRole('button');
    const searchInput = screen.getByPlaceholderText('Search for anything');

    expect(searchInput).toHaveClass('search');

    fireEvent.click(hamburgerIcon);

    expect(searchInput).toHaveClass('search-open');
    expect(mockToggleSidebar).toHaveBeenCalled();

    fireEvent.click(hamburgerIcon);

    expect(searchInput).toHaveClass('search');
    expect(mockToggleSidebar).toHaveBeenCalledTimes(2);
  });

  it('navigates to Docs page when Docs link is clicked', () => {
    renderComponent();

    const docsLink = screen.getByText('Docs');

    expect(docsLink).toBeInTheDocument();
    expect(docsLink.closest('a')).toHaveAttribute('href', '/docs');
  });

  it('navigates to Notifications page when notifications icon is clicked', () => {
    renderComponent();

    const notifyLink = screen.getByAltText('notify');

    expect(notifyLink).toBeInTheDocument();
    expect(notifyLink.closest('a')).toHaveAttribute('href', '/notifications');
  });

  it('displays profile name and dropdown icon', () => {
    renderComponent();

    const profileName = screen.getByText('Adedeji');
    const dropdownIcon = screen.getByAltText('dropdown');

    expect(profileName).toBeInTheDocument();
    expect(dropdownIcon).toBeInTheDocument();
  });
});
