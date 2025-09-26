import React from 'react';
import Button from '@/components/common/Button';

const AboutPage: React.FC = () => {
  return (
    <div>
      <h1>About Page</h1>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button size="small" shape="rounded-sm">Small Rounded</Button>
        <Button size="medium" shape="rounded-md">Medium Rounded</Button>
        <Button size="large" shape="rounded-full">Large Rounded</Button>
      </div>
    </div>
  );
};

export default AboutPage;
