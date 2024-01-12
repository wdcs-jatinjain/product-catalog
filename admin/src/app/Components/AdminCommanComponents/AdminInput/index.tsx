import React from "react";
import { InputProps } from "../../AdminInterface";


const AdminInput: React.FC<InputProps> = ({
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
  
  export default AdminInput;
  