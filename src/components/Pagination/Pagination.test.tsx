import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

const mockPaginate = jest.fn();
const mockChangeItemsPerPage = jest.fn();

const paginationProps = {
  totalUsers: 100,
  usersPerPage: 10,
  currentPage: 1,
  paginate: mockPaginate,
  changeItemsPerPage: mockChangeItemsPerPage,
};

describe('Pagination', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<Pagination {...paginationProps} />);
    expect(screen.getByText('Showing')).toBeInTheDocument();
    expect(screen.getByText('out of 100')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(3); // Previous, Next, and Page buttons
  });

  it('calls paginate function on button click', () => {
    render(<Pagination {...paginationProps} />);
    fireEvent.click(screen.getByText('2')); // Click on second page
    expect(mockPaginate).toHaveBeenCalledWith(2);
  });

  it('calls paginate function on previous button click', () => {
    render(<Pagination {...paginationProps} currentPage={2} />);
    fireEvent.click(screen.getByAltText('Previous button'));
    expect(mockPaginate).toHaveBeenCalledWith(1);
  });

  it('calls paginate function on next button click', () => {
    render(<Pagination {...paginationProps} currentPage={1} />);
    fireEvent.click(screen.getByAltText('Next button'));
    expect(mockPaginate).toHaveBeenCalledWith(2);
  });

  it('calls changeItemsPerPage function on select change', () => {
    render(<Pagination {...paginationProps} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '20' } });
    expect(mockChangeItemsPerPage).toHaveBeenCalledWith(20);
  });
});
