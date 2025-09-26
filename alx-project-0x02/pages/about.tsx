import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import { ButtonProps } from '@/interfaces';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>About Page</h1>
      <Button size="small" shape="rounded-sm" label="Small Button" onClick={() => {}} />
      <Button size="medium" shape="rounded-md" label="Medium Button" onClick={() => {}} />
      <Button size="large" shape="rounded-full" label="Large Button" onClick={() => {}} />
    </div>
  );
};

export default AboutPage;
