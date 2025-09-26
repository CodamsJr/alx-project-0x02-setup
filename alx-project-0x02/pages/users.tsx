import React from 'react';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <UserCard key={user.email} user={user} />
      ))}
    </div>
  );
};

// Next.js data fetching
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await response.json();

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
