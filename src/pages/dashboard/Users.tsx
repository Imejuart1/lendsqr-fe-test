import React, { useMemo } from 'react'
import './Users.scss'
import { useState, useEffect } from "react"
import Sidebar from "../../components/sidebar/Sidebar.tsx"
import User from '../../assets/images/icon@2x.png';
import Userr from '../../assets/images/icon.png';
import Userrr from '../../assets/images/icon3.png';
import Userrrr from '../../assets/images/icon 4.png';
import Vectororg from '../../assets/images/Vectororg.png';
import Dot from '../../assets/images/dot.png';
import Pagination from '../../components/Pagination/Pagination.tsx';
import Records from '../../components/Pagination//Records.tsx';

let PageSize = 10;

function Users() {


const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [data, setData] = useState([])
        //const [items, setItems] = useState([]);
  // User is currently on this page
   const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page   
const [recordsPerPage] = useState(9);


 


        useEffect(() => {
            fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
                .then((res) => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setData(result);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                );
        }, []);

   {/*const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
      const nPages = Math.ceil(data.length / recordsPerPage)*/}
       const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

        if (error) {
            return <>{error.message}</>;
        } else if (!isLoaded) {
            return <>loading...</>;
        } else {
            return (
              
      <div className="usermain_container">

            {/*<Records data={currentRecords}/>*/}
            
        
      <h2 className='heading'>Users</h2>
       <div className='users_record'>
        <div className='users_record_users'>
         <img src={User} className="user1" alt=""/>
          <h4>USERS</h4>
          <p>2,453</p>
        </div>
        <div className='users_record_users'>
          <img src={Userr} alt=""/>
          <h4>ACTIVE USERS</h4>
          <p>2,453</p>
        </div>
        <div className='users_record_users'>
          <img src={Userrr} alt=""/>
          <h4>USERS WITH LOANS</h4>
          <p>12,453</p>
        </div>
        <div className='users_record_users'>
          <img src={Userrrr} alt=""/>
          <h4>USERS WITH SAVINGS</h4>
          <p>102,453</p>
        </div>
         </div>
        <div className="completeinfo">
          
        
        <Records data={currentTableData}/>
        
        
        </div>
          <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
        </div>
    )
  }
}

export default Users