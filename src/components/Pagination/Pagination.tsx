import React from 'react';
import './Pagination.scss'

interface PaginationProps{
    usersPerPage: number,
    totalUsers: number,
    currentPage: number;
    paginate: (pageNumber: number) => void;
}
const Pagination: React.FC<PaginationProps> =({totalUsers, usersPerPage,  paginate, currentPage}) =>{
    const pageNumbers: number[] = []
    for (let i:number= 1; i<=Math.ceil(totalUsers/usersPerPage); i++){
        pageNumbers.push(i);
    }
    return(
        <nav>
            <span>{`Showing ${((currentPage - 1) * usersPerPage) + 1} - ${Math.min(currentPage * usersPerPage, totalUsers)} out of ${totalUsers}`}</span>
            <ul className='pagination'>
                <li>
                    <button onClick={()=> paginate(currentPage == 1 ? currentPage: currentPage-1)}>
                        {'<'}
                    </button>
                </li>
                {pageNumbers.map((number)=>(
                    <li key={number} className={currentPage === number ? 'active' : ''}>
                     <button onClick={()=> paginate(number)}>{number}</button>
                    </li>
                ))}
                <button onClick={()=> paginate(currentPage === pageNumbers.length ? currentPage : currentPage+1)}>{'>'}</button>

            </ul>
        </nav>
    )
}

export default Pagination;