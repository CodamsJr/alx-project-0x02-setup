import React from 'react';
import { type ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ size, shape, label, onClick }) => {
  let padding = '';
  switch (size) {
    case 'small':
      padding = '0.25rem 0.5rem';
      break;
    case 'medium':
      padding = '0.5rem 1rem';
      break;
    case 'large':
      padding = '0.75rem 1.5rem';
      break;
  }

  return (
    <button
      onClick={onClick}
      style={{
        padding,
        borderRadius:
          shape === 'rounded-sm'
            ? '0.125rem'
            : shape === 'rounded-md'
            ? '0.375rem'
            : '9999px',
        border: '1px solid #333',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
};

export default Button;
