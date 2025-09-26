import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <small>User ID: {userId}</small>
    </div>
  );
};

export default PostCard;
