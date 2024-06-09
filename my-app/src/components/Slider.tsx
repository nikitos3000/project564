// src/BottomDrawer.tsx
import React, { useState } from 'react';
import './Slider.css';

const  Slider: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bottom-drawer ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleDrawer}>
        {isOpen ? 'Close' : 'Open'} Drawer
      </button>
      <div className="drawer-content">
        <p>This is the content of the drawer.</p>
      </div>
      <div className="drawer-arrow" onClick={toggleDrawer}>
        <span>&uarr;</span>
      </div>
    </div>
  );
};

export default Slider;
