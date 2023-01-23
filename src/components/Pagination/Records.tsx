import React from 'react'
import './Record.scss' 
import Vectororg from '../../assets/images/Vectororg.png';
const Records = ({data}) => {
    
  return (  
    <table className="table">
        <thead>
            <tr>
                <th scope='col'><div className='try'><h5>ORGANIZATION </h5><img src={Vectororg} className="user1" alt=""/></div></th>
                <th scope='col'><div className='try'><h5>USERNAME </h5><img src={Vectororg} className="user1" alt=""/></div></th>
                <th scope='col'><div className='try'><h5>EMAIL </h5><img src={Vectororg} className="user1" alt=""/></div></th>
                <th scope='col'><div className='try'><h5>PHONENUMBER </h5><img src={Vectororg} className="user1" alt=""/></div></th>
                <th scope='col'><div className='try'><h5>DATE JOINED</h5><img src={Vectororg} className="user1" alt=""/></div></th>
                <th scope='col'><div className='try'><h5> STATUS</h5><img src={Vectororg} className="user1" alt=""/></div></th>


            </tr>
        </thead>
        <tbody>
            {data.map(item => (
                <tr>
                    <td><div className='tbdy'><p>{item.orgName}</p></div></td>
                    <td><div className='tbdy'>{item.userName}</div> </td>
                    <td><div className='tbdy'>{item.email} </div></td>
                    <td><div className='tbdy'>{item.phoneNumber}</div> </td>
                    <td><div className='tbdy'>{item.lastActiveDate}</div></td>
                    <td>  
                    <div className='tbdy'>   
                    <select  className='filter'>
                     <option value="blacklisted">Blacklisted</option>
                    <option value="inactive">Inactive</option>
                 <option value="pending">Pending</option>
                 <option value="active">Active</option>
                 </select>
                  </div>
                  </td>
                

                </tr>

                
            ))}
            
        </tbody>
    </table>
  ) 
}

export default Records  