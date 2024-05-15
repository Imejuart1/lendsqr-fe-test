import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { selectUser } from '../../components/Redux/Action.tsx';

interface UserDetailsProps extends RouteComponentProps<{ id: string }> {}

const UserDetails: React.FC<UserDetailsProps> = ({ match }) => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state: any) => state.selectedUser);

  useEffect(() => {
    // Fetch user data based on the id from the route params
    const userId = match.params.id;
    // Fetch user data based on userId
    // You should implement your own logic to fetch user data
    // For example:
    // fetchUser(userId).then((user) => dispatch(selectUser(user)));
  }, [match.params.id, dispatch]);

  return (
    <div>
      <h1>User Details</h1>
      {selectedUser && (
        <div>
          <p>Username: {selectedUser.USERNAME}</p>
          <p>Email: {selectedUser.EMAIL}</p>
          <p>Phone Number: {selectedUser['PHONE NUMBER']}</p>
          {/* Add more user details here */}
        </div>
      )}
    </div>
  );
};

export default UserDetails;
