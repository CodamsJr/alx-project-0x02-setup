import React, { useEffect, useState } from 'react';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <UserCard key={user.email} user={user} />
      ))}
    </div>
  );
};

export default UsersPage;
