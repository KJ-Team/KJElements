import React, { FC } from 'react';
import './KJButton.css';

interface KJButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const KJButton: FC<KJButtonProps> = ({ children, ...props }) => {
  return (
    <button className='KJButton' {...props}>
      {children}
    </button>
  );
};

export default KJButton;
