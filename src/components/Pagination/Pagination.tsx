import React from 'react';
import './Pagination.scss';
import CustomSelect from '../customselect/CustomSelect.tsx';

interface PaginationProps {
  usersPerPage: number;
  totalUsers: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
  changeItemsPerPage: (perPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalUsers,
  usersPerPage,
  paginate,
  currentPage,
  changeItemsPerPage,
}) => {
  const pageNumbers: number[] = [];
  const MAX_BUTTONS = 5;

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    const totalPages = pageNumbers.length;
    const pageItems: JSX.Element[] = [];

    const showEllipsis = (key: string) => {
      pageItems.push(<li key={key}><span>...</span></li>);
    };

    const addPageButton = (number: number) => {
      pageItems.push(
        <li key={number} className={currentPage === number ? 'active' : ''}>
          <button onClick={() => paginate(number)}>{number}</button>
        </li>
      );
    };

    if (totalPages <= MAX_BUTTONS) {
      for (let number = 1; number <= totalPages; number++) {
        addPageButton(number);
      }
    } else {
      if (currentPage <= 3) {
        for (let number = 1; number <= 3; number++) {
          addPageButton(number);
        }
        showEllipsis('start-ellipsis');
        addPageButton(totalPages - 1);
        addPageButton(totalPages);
      } else if (currentPage > totalPages - 3) {
        addPageButton(1);
        addPageButton(2);
        showEllipsis('end-ellipsis');
        for (let number = totalPages - 2; number <= totalPages; number++) {
          addPageButton(number);
        }
      } else {
        addPageButton(1);
        showEllipsis('start-ellipsis');
        for (let number = currentPage - 1; number <= currentPage + 1; number++) {
          addPageButton(number);
        }
        showEllipsis('end-ellipsis');
        addPageButton(totalPages - 1);
        addPageButton(totalPages);
      }
    }

    return pageItems;
  };

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const perPage = parseInt(event.target.value, 10);
    changeItemsPerPage(perPage);
  };

  const options = [];
  const division = Math.ceil(totalUsers / 10);
  for (let i = 1; i <= division; i++) {
    options.push(i * 10);
  }

  return (
    <nav className="pagination_main">
      <div className='showoption'>
        Showing{' '}
        <CustomSelect options={options} value={usersPerPage} onChange={handleItemsPerPageChange} />{' '}
        out of {totalUsers}
      </div>
      <ul className="pagination">
        <li>
          <button onClick={() => paginate(currentPage === 1 ? currentPage : currentPage - 1)}>
            <img src="/images/prev btn.svg" alt="Previous button" />
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            onClick={() =>
              paginate(currentPage === pageNumbers.length ? currentPage : currentPage + 1)
            }
          >
            <img src="/images/next btn.svg" alt="Next button" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
