import React, { FC } from 'react';

interface KJButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement,
}

const KJButton: FC<KJButtonProps> = ({ children, ...props }) => {
  return (
    <button className='KJButton' {...props}>
      {children}
    </button>
  );
};

export default KJButton;
