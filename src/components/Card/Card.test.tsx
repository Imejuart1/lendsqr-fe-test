import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders Card component', () => {
  const title = 'Test Title';
  const value = 'Test Value';
  const icon = 'test-icon.svg';

  render(<Card title={title} value={value} icon={icon} />);

  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(value)).toBeInTheDocument();
  expect(screen.getByAltText('icon')).toBeInTheDocument();
});

