import React from "react";
import "./endingwithab.css";

const Even0Odd1 = () => {
  const [elements, setElements] = React.useState("");
  // const symbol = document.querySelector(".input-group_automata");
  const states = document.querySelectorAll(".state_circle");
  const transition = document.querySelectorAll(".transition");
  const back_transition = document.querySelectorAll(".back-transition");

  function sleep() {
    return new Promise((resolve) => setTimeout(resolve, 1500));
  }
  function wait() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  let currState = 0;
  async function showSimulation(symbols) {
    for (const [index, alphabet] of symbols.entries()) {
      document.querySelectorAll(".input-group_automata span")[
        index
      ].style.backgroundColor = "#4facfe";
      if (alphabet.textContent === "0") {
        if (currState === 0) {
          transition[1].style.backgroundColor = "#4facfe";
          states[0].style.backgroundColor = "#16141c";
          states[3].style.backgroundColor = "#16141c";
          await wait();
          transition[1].style.backgroundColor = "white";
          states[1].style.backgroundColor = "#4facfe";

          currState = 1;
        } else if (currState === 1) {
          transition[1].style.backgroundColor = "#4facfe";
          states[1].style.backgroundColor = "#16141c";
          await wait();

          transition[1].style.backgroundColor = "white";
          states[0].style.backgroundColor = "#4facfe";

          currState = 0;
        } else if (currState === 2) {
          transition[3].style.backgroundColor = "#4facfe";
          states[2].style.backgroundColor = "#16141c";
          await wait();

          transition[3].style.backgroundColor = "white";
          states[3].style.backgroundColor = "#4facfe";

          currState = 3;
        } else {
          transition[3].style.backgroundColor = "#4facfe";
          states[3].style.backgroundColor = "#16141c";
          await wait();

          transition[3].style.backgroundColor = "white";
          states[2].style.backgroundColor = "#4facfe";

          currState = 2;
        }
      } else if(alphabet.textContent === "1") {
        if (currState === 0) {
          currState = 3;
          states[0].style.backgroundColor = "#16141c";
          states[1].style.backgroundColor = "#16141c";
          back_transition[0].style.borderColor = "#4facfe";
          await wait();
          back_transition[0].style.borderColor = "white";
          states[3].style.backgroundColor = "#4facfe";
        } else if (currState === 1) {
          currState = 2;
          states[1].style.backgroundColor = "#16141c";
          transition[2].style.backgroundColor = "#4facfe";
          await wait();
          transition[2].style.backgroundColor = "white";
          states[2].style.backgroundColor = "#4facfe";
        } else if (currState === 2) {
          currState = 1;
          states[2].style.backgroundColor = "#16141c";
          transition[2].style.backgroundColor = "#4facfe";
          await wait();
          transition[2].style.backgroundColor = "white";
          states[1].style.backgroundColor = "#4facfe";
        } else {
          currState = 0;
          states[0].style.backgroundColor = "#16141c";
          states[3].style.backgroundColor = "#16141c";
          back_transition[0].style.borderColor = "#4facfe";
          await wait();
          back_transition[0].style.borderColor = "white";
          states[0].style.backgroundColor = "#4facfe";
        }
      }
      await sleep();
    }

    states[2].style.backgroundColor = "#16141c";
    symbols.forEach((_, index) => {
      symbols[index].style.backgroundColor = "slateblue";
    });
    if (currState === 3) alert("String is accepted");
    else alert("String is rejected");

    setElements("");
    states[currState].style.backgroundColor = "#16141c";
    const spanChild = document.querySelectorAll(".input-group_automata span");
    spanChild.forEach((span) => span.remove());
  }

  // const btn = document.querySelector(".input-group_automata button");
  async function showElements() {
    const elements = document.querySelector(".input-field").value;
    const inputString = elements.split(" ");
    console.log(inputString);
    inputString.forEach((ele) => {
      const span = document.createElement("span");
      span.textContent = ele;
      console.log(span);
      document.querySelector(".input-group_automata").appendChild(span);
    });
    states[0].style.backgroundColor = "#4facfe";
    await sleep();
    const symbols = document.querySelectorAll(".input-group_automata span");
    showSimulation(symbols);
  }

  return (
    <div className="body_box">
      <div className="container_for_visualization">
        {/* <!-- initial transition --> */}
        <div className="transition">
          <span
            style={{
              fontSize: "60px",
              fontWeight: "50px",
              position: "relative",
              right: "-72px",
              top: "-38px",
              zIndex: "6",
            }}
          >
            &gt;
          </span>
        </div>

        {/* <!-- initial state --> */}

        <div className="initial state_circle state">q0</div>

        {/* <!-- transiion to q1 --> */}

        <div className="transition">
          {/* <!-- forward arrow --> */}
          <span
            style={{
              fontSize: "60px",
              fontWeight: "50px",
              position: "relative",
              right: "-72px",
              top: "-38px",
              zIndex: "6",
            }}
          >
            &gt;
          </span>

          {/* <!-- backward arrrow --> */}

          <span className="back-arrow">&lt;</span>

          <span className="element">0</span>
        </div>

        {/* <!-- q1 state --> */}
        <div className="intermmediate state_circle state">q1</div>

        {/* <!-- transition to q2 --> */}

        <div className="transition">
          {/* <!-- forward arrow --> */}
          <span
            style={{
              fontSize: "60px",
              fontWeight: "50px",
              position: "relative",
              right: "-72px",
              top: "-38px",
              zIndex: "6",
            }}
          >
            &gt;
          </span>

          {/* <!-- backward arrow --> */}

          <span className="back-arrow">&lt;</span>

          <span className="element">1</span>
        </div>

        {/* <!-- q2 state --> */}

        <div className="intermmediate state_circle state">q2</div>

        {/* <!-- transition to q3 --> */}

        <div className="transition">
          {/* <!-- forward arrow --> */}
          <span
            style={{
              fontSize: "60px",
              fontWeight: "50px",
              position: "relative",
              right: "-72px",
              top: "-38px",
              zIndex: "6",
            }}
          >
            &gt;
          </span>

          {/* <!-- backward arrow --> */}

          <span className="back-arrow">&lt;</span>

          <span className="element">0</span>
        </div>

        {/* <!-- transition to q3 / FINAL STATE--> */}

        <div
          className="back-transition"
          style={{
            top: "363px",
            left: "387px",
            width: "601px",
            height: "120px",
            position: "absolute",
          }}
        >
          {/* <!-- forward arrow --> */}

          <span
            style={{
              right: "-7px",
              fontSize: "60px",
              fontWeight: " 50px",
              transform: " rotate(32deg)",
              position: "absolute",
              top: "38px",
              zIndex: "6",
            }}
          >
            ^
          </span>

          {/* <!-- backward arrow --> */}

          <span
            style={{
              left: "-7px",
              fontSize: "60px",
              fontWeight: "50px",
              transform: "rotate(-32deg)",
              position: "absolute",
              top: "39px",
              zIndex: "6",
            }}
          >
            ^
          </span>

          <span
            style={{
              fontSize: "30px",
              position: "relative",
              top: "130px",
              left: "390px",
            }}
          >
            1
          </span>
        </div>

        {/* <!-- final state --> */}

        <div
          className="final state_circle"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="final-1 state_circle"
            style={{ width: "60px", height: "60px" }}
          >
            q3
          </div>
        </div>
      </div>

      <div className="input-group_automata">
        <input
          value={elements}
          onChange={(e) => setElements(e.target.value)}
          type="text"
          className="input-field"
          placeholder="Enter array elements"
        />
        <button onClick={showElements}>Submit</button>
      </div>
    </div>
  );
};

export default Even0Odd1;
