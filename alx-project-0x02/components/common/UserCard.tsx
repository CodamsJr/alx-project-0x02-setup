import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>
        Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
