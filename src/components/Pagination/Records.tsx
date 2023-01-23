import React from 'react'
import './Record.scss' 

const Records = ({data}) => {
    
  return (  
    <table className="table">
        <thead>
            <tr>
                <th scope='col'>ORGANIZATION</th>
                <th scope='col'>USERNAME</th>
                <th scope='col'>EMAIL</th>
                <th scope='col'>PHONE NUMBER</th>
                <th scope='col'>DATE JOINED</th>
                <th scope='col'>STATUS</th>


            </tr>
        </thead>
        <tbody>
            {data.map(item => (
                <tr>
                    <td>{item.orgName}</td>
                    <td>{item.userName} </td>
                    <td>{item.email} </td>
                    <td>{item.phoneNumber} </td>
                    <td>{item.lastActiveDate}</td>
                    <td>     <select  className='filter'>
                     <option value="blacklisted">Blacklisted</option>
                    <option value="inactive">Inactive</option>
                 <option value="pending">Pending</option>
                 <option value="active">Active</option>
                 </select></td>
                  

                </tr>

                
            ))}
            
        </tbody>
    </table>
  ) 
}

export default Records  