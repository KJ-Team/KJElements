import React, { FC } from 'react';
import './KJButton.module.css';

interface KJButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement | string,
}

const KJButton: FC<KJButtonProps> = ({ children, ...props }) => {
  return (
    <button className='KJButton' {...props}>
      {children}
    </button>
  );
};

export default KJButton;
