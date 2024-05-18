import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import MoreInfoPopup from './MoreInfoPopup';

const mockUser = {
  USERNAME: 'john_doe',
  EMAIL: 'john.doe@example.com',
  'PHONE NUMBER': '123-456-7890',
};

const mockOnClose = jest.fn();
const mockOnBlacklist = jest.fn();
const mockOnActivate = jest.fn();

const renderComponent = (positionX = 100, positionY = 100) => {
  const history = createMemoryHistory();
  return render(
    <Router location={history.location} navigator={history}>
      <MoreInfoPopup
        user={mockUser}
        onClose={mockOnClose}
        onBlacklist={mockOnBlacklist}
        onActivate={mockOnActivate}
        positionX={positionX}
        positionY={positionY}
      />
    </Router>
  );
};

describe('MoreInfoPopup', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    renderComponent();

    expect(screen.getByText('View Details')).toBeInTheDocument();
    expect(screen.getByText('Blacklist User')).toBeInTheDocument();
    expect(screen.getByText('Activate User')).toBeInTheDocument();
  });

  it('calls onClose when clicking outside the popup', () => {
    renderComponent();
    fireEvent.mouseDown(document);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('does not call onClose when clicking inside the popup', () => {
    renderComponent();
    fireEvent.mouseDown(screen.getByText('View Details'));
    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('calls onBlacklist when clicking the "Blacklist User" option', () => {
    renderComponent();
    fireEvent.click(screen.getByText('Blacklist User'));
    expect(mockOnBlacklist).toHaveBeenCalled();
  });

  it('calls onActivate when clicking the "Activate User" option', () => {
    renderComponent();
    fireEvent.click(screen.getByText('Activate User'));
    expect(mockOnActivate).toHaveBeenCalled();
  });

  it('navigates to user details when clicking "View Details"', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <MoreInfoPopup
          user={mockUser}
          onClose={mockOnClose}
          onBlacklist={mockOnBlacklist}
          onActivate={mockOnActivate}
          positionX={100}
          positionY={100}
        />
      </Router>
    );

    fireEvent.click(screen.getByText('View Details'));
    expect(history.location.pathname).toBe(`/user-details/${mockUser.USERNAME}`);
  });

  it('adjusts position on window resize', () => {
    renderComponent(100, 100);
    global.innerWidth = 800;
    fireEvent.resize(window);
    expect(screen.getByRole('dialog')).toHaveStyle('left: 100px');
  });

  it('limits positionY to a maximum of 600', () => {
    renderComponent(100, 700);
    expect(screen.getByRole('dialog')).toHaveStyle('top: 600px');
  });
});
