import React, { ChangeEvent } from "react";

interface InputProps {
  type: string;
  value: string;
  name: string;
  disabled?: boolean;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  name,
  disabled = false,
  placeholder = "",
  onChange,
}) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
