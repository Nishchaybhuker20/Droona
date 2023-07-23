import React from "react";
import '../App.css';
const Header = () => {
  return (
    <>
      <div className="header_content">
        <h2>Enjoy the new Way of studying algorithms</h2>
        <h1>Algorithm Visualizer</h1>
        <button className="btn">Start Visualizing</button>
        <div className="scroll-container">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <span className="text">Scroll down</span>
        </div>
      </div>
    </>
  );
};

export default Header;
