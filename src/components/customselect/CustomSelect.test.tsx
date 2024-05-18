import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomSelect from './CustomSelect';

describe('CustomSelect', () => {
  const mockOptions = [1, 2, 3, 4, 5];
  const mockOnChange = jest.fn();

  it('renders without crashing', () => {
    render(<CustomSelect options={mockOptions} value={1} onChange={mockOnChange} />);
    expect(screen.getByRole('select')).toBeInTheDocument();
  });

  it('displays the correct options', () => {
    render(<CustomSelect options={mockOptions} value={1} onChange={mockOnChange} />);
    const selectElement = screen.getByRole('select');
    const options = selectElement.querySelectorAll('option');
    expect(options.length).toBe(mockOptions.length);
    options.forEach((option, index) => {
      expect(option).toHaveValue(String(mockOptions[index]));
      expect(option).toHaveTextContent(String(mockOptions[index]));
    });
  });

  it('handles value change correctly', () => {
    render(<CustomSelect options={mockOptions} value={1} onChange={mockOnChange} />);
    const selectElement = screen.getByRole('select');
    fireEvent.change(selectElement, { target: { value: '2' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange.mock.calls[0][0].target.value).toBe('2');
  });


  it('displays the correct initial value', () => {
    render(<CustomSelect options={mockOptions} value={3} onChange={mockOnChange} />);
    const selectElement = screen.getByRole('select');
    expect(selectElement).toHaveValue('3');
  });

  it('displays the dropdown arrow image', () => {
    render(<CustomSelect options={mockOptions} value={1} onChange={mockOnChange} />);
    const imgElement = screen.getByAltText('Dropdown');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '/images/downarrow2.svg');
  });
});
