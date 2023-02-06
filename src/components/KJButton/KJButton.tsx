import React from 'react';
import './KJButton.css';

export interface KJButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large',
  onClick?: () => void,
  label?: string,
}

const KJButton = ({ label, size = 'medium', ...props }: KJButtonProps) => {
  return (
    <button
      className={['KJButton', `KJButton__${size}`].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

export default KJButton;
