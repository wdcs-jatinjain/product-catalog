import React from "react";

interface CustomEyeIconProps {
  onClick: () => void;
  visible?: boolean;
   className:string
}

const CustomEyeIcon: React.FC<CustomEyeIconProps> = ({ onClick, visible,className  }) => {
  return (
    <i
      className={`fas fa-eye${visible ? "" : "-slash"}`}
      onClick={onClick}
      aria-hidden="true"
    ></i>
  );
};

export default CustomEyeIcon;