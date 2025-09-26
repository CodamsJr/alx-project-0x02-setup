// interfaces/index.ts

// Props for the reusable Card component
export interface CardProps {
  title: string;
  content: string;
}

// Props for the reusable Button component
export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
  onClick?: () => void;
}

// Props for the PostCard component
export interface PostProps {
  userId: number;
  title: string;
  content: string;
}

// Props for the UserCard component
export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}
