import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
