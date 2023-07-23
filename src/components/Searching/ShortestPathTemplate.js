import React from "react";
import "../searchingTemplate.css";
import startVisualization from "./ShortestPath";

const ShortestPathTemplate = (props) => {
  React.useEffect(() => {
    const container = document.querySelector(".containers");
    const source = document.querySelector(".source");
    const dest = document.querySelector(".dest");
    const blocked = document.querySelector(".blocked");
    const submit = document.querySelector(".submit");
    let blk = 0,
      src = -1,
      dst = -1;
    // countSteps = 0;

    // let arr = [];
    for (let i = 0; i < 407; i++) {
      const cells = document.createElement("div");
      cells.classList.add("block");
      cells.style.backgroundColor = "rgb(255, 255, 255)";
      container.appendChild(cells);
    }

    source.addEventListener("click", () => {
      container.removeEventListener("mouseover", color);
      if (src === -1) {
        src = 0;
      } else alert("Source already choosen");
      blk = 0;
    });
    dest.addEventListener("click", () => {
      container.removeEventListener("mouseover", color);
      if (dst === -1) dst = 0;
      else alert("Source already choosen");
      blk = 0;
    });
    blocked.addEventListener("click", () => {
      container.addEventListener("mouseover", color);
      blk = 1;
    });
    submit.addEventListener("click", findCoords);

    container.addEventListener("click", color);

    function color(e) {
      if (!e.target.classList.contains("block")) return;

      if (blk) e.target.style.backgroundColor = "rgb(0, 0, 0)";
      else if (src >= 0 && !src) {
        e.target.style.backgroundColor = "coral";
        e.target.textContent = "1";
        console.log(
          e.target.style.backgroundColor,
          typeof e.target.style.backgroundColor
        );
        src = 1;
      } else if (dst >= 0 && !dst) {
        e.target.style.backgroundColor = "deeppink";
        e.target.textContent = "2";
        dst = 1;
      }
    }

    // finding source and destination coords
    function findCoords() {
      const cells = document.querySelectorAll(".block");
      let c = 0;
      let sx = -1,
        sy = -1,
        dx = -1,
        dy = -1;
      for (let i = 1; i <= 12; i++) {
        for (let j = 1; j <= 34; j++) {
          if (
            getComputedStyle(cells[c]).backgroundColor === "rgb(255, 127, 80)"
          ) {
            sx = i;
            sy = j;
            console.log(sx, sy, c);
          } else if (
            getComputedStyle(cells[c]).backgroundColor === "rgb(255, 20, 147)"
          ) {
            dx = i;
            dy = j;
            console.log(dx, dy, c);
          }
          c++;
        }
      }
      if (sx === -1 || sy === -1 || dx === -1 || dy === -1) {
        alert("Select Both Source And Destination");
        return;
      }
      startVisualization(sx, sy, dx, dy);
    }
  }, []);

  return (
    <div className="top-container">
      <button className="btn source">Click To Select Source Cell</button>
      <button className="btn dest">Click To Select Destination Cell</button>
      <button className="btn blocked">Click To Create Blocked Cell</button>
      <button className="btn submit">Submit</button>
      <button className="btn reset">Reset</button>
      <div className="containers">
        <div className="block"></div>
      </div>
    </div>
  );
};

export default ShortestPathTemplate;
