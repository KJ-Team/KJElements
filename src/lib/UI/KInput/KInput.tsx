import React, { FC } from 'react';
import './KInput.css';

interface KInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const KInput: FC<KInputProps> = ({ label, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...props} />
    </div>
  );
};

export default KInput;
