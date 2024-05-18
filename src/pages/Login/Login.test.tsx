import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

test('renders Login component', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      )
      });
  expect(screen.getByText('Welcome!')).toBeInTheDocument();
  expect(screen.getByText('Enter details to login.')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  expect(screen.getByText('LOG IN')).toBeInTheDocument();
});

test('handles email change', () => {
  act(() => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  });
  const emailInput = screen.getByPlaceholderText('Email');
  act(() => {
    (emailInput as HTMLInputElement).value = 'test@example.com';
    (emailInput as HTMLInputElement).dispatchEvent(new Event('change', { bubbles: true }));
  });
  expect(screen.getByDisplayValue('test@example.com')).toBeInTheDocument();
});

test('handles password change', () => {
  act(() => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  });
  const passwordInput = screen.getByPlaceholderText('Password');
  act(() => {
    (passwordInput as HTMLInputElement).value = 'password123';
    (passwordInput as HTMLInputElement).dispatchEvent(new Event('change', { bubbles: true }));
  });
  expect(screen.getByDisplayValue('password123')).toBeInTheDocument();
});

test('handles form submission', () => {
  act(() => {
    render(<Login />);
  });
  const submitButton = screen.getByText('LOG IN');
  act(() => {
    submitButton.click();
  });
})
  
  
  
