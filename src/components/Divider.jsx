import React from 'react';
import './Divider.css';

function Divider() {
  return (
    <div className="divider">
      <div className="divider-line">
        <div className="divider-gradient-left"></div>
      </div>
      <div className="divider-icon">
        <span>◆</span>
      </div>
      <div className="divider-line">
        <div className="divider-gradient-right"></div>
      </div>
    </div>
  );
}

export default Divider;