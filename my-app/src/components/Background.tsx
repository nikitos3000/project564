import React from "react";
import "./Background.css";
import ClickButton from "./ClickButton";

const BackgroundComponent: React.FC = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="background">
      <div className="content">
        <div className="counter">{count}</div>
        <ClickButton onClick={handleClick} />
      </div>
    </div>
  );
};

export default BackgroundComponent;
