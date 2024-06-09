import React from 'react';
import './Background.css'; 


const BackgroundComponent: React.FC = () => {
  
const [count, setcount] = React.useState(0)

  return (
    <div className="background">
      <div className="content">
        <div className='counter'>{count}</div>
      </div>
    </div>
  );
};

export default BackgroundComponent;
