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
    const visibleStartPage = Math.max(
      Math.min(currentPage - Math.floor(MAX_BUTTONS / 2), totalPages - MAX_BUTTONS + 1),
      1
    );
    const visibleEndPage = Math.min(visibleStartPage + MAX_BUTTONS - 1, totalPages);

    const pageItems: JSX.Element[] = [];

    if (visibleStartPage > 1) {
      if (visibleStartPage > 3) {
        pageItems.push(
          <li key={1} className={currentPage === 1 ? 'active' : ''}>
            <button onClick={() => paginate(1)}>1</button>
          </li>
        );
        pageItems.push(
          <li key={'startEllipsis'}>
            <span>...</span>
          </li>
        );
      } else {
        for (let number = 1; number < visibleStartPage; number++) {
          pageItems.push(
            <li key={number} className={currentPage === number ? 'active' : ''}>
              <button onClick={() => paginate(number)}>{number}</button>
            </li>
          );
        }
      }
    }

    for (let number = visibleStartPage; number <= visibleEndPage; number++) {
      pageItems.push(
        <li key={number} className={currentPage === number ? 'active' : ''}>
          <button onClick={() => paginate(number)}>{number}</button>
        </li>
      );
    }

    if (visibleEndPage < totalPages) {
      if (visibleEndPage < totalPages - 2) {
        pageItems.push(
          <li key={'endEllipsis'}>
            <span>...</span>
          </li>
        );
        pageItems.push(
          <li key={totalPages} className={currentPage === totalPages ? 'active' : ''}>
            <button onClick={() => paginate(totalPages)}>{totalPages}</button>
          </li>
        );
      } else {
        for (let number = visibleEndPage + 1; number <= totalPages; number++) {
          pageItems.push(
            <li key={number} className={currentPage === number ? 'active' : ''}>
              <button onClick={() => paginate(number)}>{number}</button>
            </li>
          );
        }
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
            <img src="/images/prev btn.svg" alt="Filter icon" />
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            onClick={() =>
              paginate(currentPage === pageNumbers.length ? currentPage : currentPage + 1)
            }
          >
            <img src="/images/next btn.svg" alt="Filter icon" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
