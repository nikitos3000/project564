import React from "react";
import "./ClickButton.css";

interface ClickButtonProps {
  onClick: () => void;
}

const ClickButton: React.FC<ClickButtonProps> = ({ onClick }) => {
  return (
    <button className="click-button" onClick={onClick}>
      <img src="./ImgOilRing.png" alt="" className="button-image" />
    </button>
  );
};

export default ClickButton;
