import React from "react";
import "./styles.css";

const HamburguerButton = ({
  className,
  active,
}: {
  className?: string;
  active: boolean;
}) => {
  return (
    <div className={`menu-activador relative z-20 ${active ? "active" : ""} ${className}`}>
      <div className="menu-activador-linea"></div>
      <div className="menu-activador-linea"></div>
      <div className="menu-activador-linea"></div>
    </div>
  );
};

export default HamburguerButton;
