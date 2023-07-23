import { React, useState } from "react";
import ChangeNavigation from './ChangeNavigation.js';
import "../App.css";

const Visualize = () => {
  // updating index
  const [tab, setTab] = useState(0);
  function changeTab(index) {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((elem, tabIndex) => {
      if (index !== tabIndex) elem.classList.remove("active");
      else elem.classList.add("active");
    });

    setTab(index);
  }
  return (
    <>
      <section className="main-container" id="searching">
        <div className="tabs">
          <h1 style={{ fontSize: "3rem" }}>Visualize</h1>
          <div
            className="active tab one"
            onClick={() => {
              changeTab(0);
            }}
          >
            Searching Techniques
          </div>
          <div
            className="tab two"
            onClick={() => {
              changeTab(1);
            }}
          >
            Sorting Techniques
          </div>
          <div
            className="tab three"
            onClick={() => {
              changeTab(2);
            }}
          >
            Automata
          </div>
        </div>

        <ul className="sub-container">{ChangeNavigation(tab)}</ul>
      </section>
    </>
  );
};

export default Visualize;
