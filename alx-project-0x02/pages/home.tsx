import React from 'react';
import Card from '@/components/common/Card';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>

      <Card title="Card 1" content="This is the first card." />
      <Card title="Card 2" content="This is the second card." />
      <Card title="Card 3" content="This is the third card." />
    </div>
  );
};

export default HomePage;
