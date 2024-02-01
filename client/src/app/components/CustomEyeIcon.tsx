import React from "react";

interface CustomEyeIconProps {
  onClick: () => void;
  visible: boolean;
}

const CustomEyeIcon: React.FC<CustomEyeIconProps> = ({ onClick, visible }) => {
  return (
    <i
      className={`fas fa-eye${visible ? "" : "-slash"}`}
      onClick={onClick}
      aria-hidden="true"
    ></i>
  );
};

export default CustomEyeIcon;
