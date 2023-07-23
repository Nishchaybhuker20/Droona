import React from "react";
import "./endingwithab.css";

const EndingWithab = () => {
  const [elements, setElements] = React.useState("");

  // const symbol = document.querySelector(".input-group_automata");
  const states = document.querySelectorAll(".state_circle");
  const transition = document.querySelectorAll(".transition");
  const self_loop = document.querySelectorAll(".self-loop");
  const back_transition = document.querySelectorAll(".back-transition");

  function sleep() {
    return new Promise((resolve) => setTimeout(resolve, 1500));
  }
  function wait() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
  let currState = 0;
  async function showSimulation(symbols) {
    console.log(symbols);
    for (const [index, alphabet] of symbols.entries()) {
      document.querySelectorAll(".input-group_automata span")[
        index
      ].style.backgroundColor ="#4facfe";

      if (alphabet.textContent === "a") {
        if (currState === 0) {
          transition[1].style.backgroundColor = "#4facfe";
          await wait();
          transition[1].style.backgroundColor = "white";

          states[0].style.backgroundColor = "#16141c";
          states[1].style.backgroundColor = "#4facfe";

          currState = 1;
        } else if (currState === 1) {
          self_loop[1].style.borderColor = "#4facfe";
          states[1].style.backgroundColor = "#16141c";
          await wait();
          self_loop[1].style.borderColor = "white";
          states[1].style.backgroundColor = "#4facfe";
        } else if (currState === 2) {
          currState = 1;
          states[2].style.backgroundColor = "#16141c";
          back_transition[0].style.borderColor = "#4facfe";
          await wait();
          back_transition[0].style.borderColor = "white";
          states[1].style.backgroundColor = "#4facfe";
        }
      } else if (alphabet.textContent === "b"){
        if (currState === 0) {
          states[0].style.backgroundColor = "#16141c";
          self_loop[0].style.borderColor = "#4facfe";
          await wait();
          self_loop[0].style.borderColor = "white";
          states[0].style.backgroundColor = "#4facfe";
        } else if (currState === 1) {
          currState = 2;
          states[1].style.backgroundColor = "#16141c";
          transition[2].style.backgroundColor = "#4facfe";
          await wait();
          transition[2].style.backgroundColor = "white";
          states[2].style.backgroundColor = "#4facfe";
        } else if (currState === 2) {
          currState = 0;
          states[2].style.backgroundColor = "#16141c";
          back_transition[1].style.borderColor = "#4facfe";
          await wait();
          back_transition[1].style.borderColor = "white";
          states[0].style.backgroundColor = "#4facfe";
        }
      }
      await sleep();
    }

    states[2].style.backgroundColor = "#16141c";
    symbols.forEach((_, index) => {
      symbols[index].style.backgroundColor = "slateblue";
    });
    if (currState === 2) alert("String is accepted");
    else alert("String is rejected");

    setElements("");
    states[currState].style.backgroundColor = "#16141c";
    const spanChild = document.querySelectorAll(".input-group_automata span");
    spanChild.forEach((span)=>span.remove());

  }

  // const btn = document.querySelector(".input-group_automata button");

  async function showElements() {
    if (elements === ""){
      alert('Input can\'t be Empty "(');
      return;
    }
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
        <div className="transition">
          <span
            style={{
              fontSize: "60px",
              fontWeight: "50px",
              position: "relative",
              right: "-72px",
              top: "-32px",
              zIndex: "6",
            }}
          >
            &gt;
          </span>
        </div>

        <div className="initial state_circle state">q0</div>

        <div className="self-loop" style={{ left: "451px" }}>
          <span
            style={{
              fontSize: "30px",
              position: "absolute",
              top: "-37px",
              transform: "rotate(-41deg)",
              borderBottom: "white",
              borderRight: "white",
            }}
          >
            b
          </span>
        </div>

        <div className="transition">
          <span
            style={{
              fontSize: "60px",
              fontWeight: "50px",
              position: "relative",
              right: "-72px",
              top: "-42px",
              zIndex: "6",
            }}
          >
            &gt;
          </span>
          <span
            style={{ fontSize: "30px", position: "relative", top: "-28px" }}
          >
            a
          </span>
        </div>

        <div className="intermmediate state_circle state">q1</div>
        <div className="self-loop" style={{ left: "646px" }}>
          <span
            style={{
              fontSize: "30px",
              position: "absolute",
              top: "-37px",
              transform: "rotate(-41deg)",
              borderBottom: "white",
              borderRight: "white",
            }}
          >
            a
          </span>
        </div>

        <div className="transition">
          <span
            style={{
              fontSize: "60px",
              fontWeight: "50px",
              position: "relative",
              right: "-72px",
              top: "-42px",
              zIndex: "6",
            }}
          >
            &gt;
          </span>
          <span
            style={{ fontSize: "30px", position: "relative", top: "-24px" }}
          >
            b
          </span>
        </div>

        <div className="back-transition">
          <span
            style={{
              fontSize: "60px",
              fontWeight: "50px",
              transform: "rotate(90deg)",
              position: "relative",
              top: "11.5px",
              left: "-18px",
              zIndex: "6",
            }}
          >
            ^
          </span>
          <span
            style={{
              fontSize: "30px",
              position: "relative",
              top: "1px",
              left: "60px",
            }}
          >
            a
          </span>
        </div>

        <div
          className="back-transition"
          style={{
            left: "477px",
            width: "458px",
            height: "190px",
            top: "320px",
          }}
        >
          <span
            style={{
              fontSize: "60px",
              fontWeight: "50px",
              transform: "rotate(90deg)",
              position: "relative",
              top: "80px",
              left: "-14px",
              zIndex: "6",
            }}
          >
            ^
          </span>
          <span
            style={{
              fontSize: "30px",
              position: "relative",
              top: "100px",
              left: "60px",
            }}
          >
            b
          </span>
        </div>

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
            q2
          </div>
        </div>
      </div>

      <div className="input-group_automata">
        <input
          onChange={(e) => setElements(e.target.value)}
          value={elements}
          type="text"
          className="input-field"
          placeholder="Enter array elements"
        />
        <button onClick={showElements}>Submit</button>
      </div>
    </div>
  );
};

export default EndingWithab;
