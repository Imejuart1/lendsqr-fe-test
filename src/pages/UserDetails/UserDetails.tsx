// UserDetails.tsx
import React from 'react';

interface UserDetailsProps {
  user: any;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div>
      <h1>User Details</h1>
      <div>
        <p>Username: {user.USERNAME}</p>
        <p>Email: {user.EMAIL}</p>
        <p>Phone Number: {user['PHONE NUMBER']}</p>
        {/* Add more user details here */}
      </div>
    </div>
  );
};

export default UserDetails;
