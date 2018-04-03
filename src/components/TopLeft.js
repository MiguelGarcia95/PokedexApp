import React from 'react';

const TopLeft = () => {
  return(
    <div className="top">
      <div className="left">
        <div className="line-shadow"></div>
        <div className="ring">
          <div className="ring-shadow"></div>
          <div className="circle">
            <div className="shade"></div>
            <div className="shade2"></div>
            <div className="glow"></div>
          </div>
        </div>
        <div className="red"><div className="color"></div></div>
        <div className="yellow"><div className="color"></div></div>
        <div className="green"><div className="color"></div></div>
      </div>
      <div className="bar"><div className="line-shadow"></div></div>
      <div className="slope"></div>
    </div>
  );
}

export default TopLeft;
