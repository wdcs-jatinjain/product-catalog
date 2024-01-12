import React from "react";
import { InputProps } from "../../Interface";

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
