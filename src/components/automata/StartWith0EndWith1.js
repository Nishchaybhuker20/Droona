import React from "react";
import "./endingwithab.css";

const StartWith0EndWith1 = () => {
  const [elements, setElements] = React.useState("");
  // const symbol = document.querySelector(".input-group_automata");
  const states = document.querySelectorAll(".state_circle");
  const transition = document.querySelectorAll(".transition");
  const self_loop = document.querySelectorAll(".self-loop");
  const back_transition = document.querySelectorAll(".back-transition");
  // console.log(transition);
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
      ].style.backgroundColor = "#4facfe";
      console.log(alphabet.textContent, typeof alphabet.textContent, currState);
      if (alphabet.textContent === "0") {
        if (currState === 0) {
          transition[1].style.backgroundColor = "#4facfe";
          await wait();
          transition[1].style.backgroundColor = "white";

          states[0].style.backgroundColor = "#16141c";
          states[1].style.backgroundColor = "#4facfe";

          currState = 1;
        } else if (currState === 1) {
          self_loop[0].style.borderColor = "#4facfe";
          states[1].style.backgroundColor = "#16141c";
          await wait();
          self_loop[0].style.borderColor = "white";
          states[1].style.backgroundColor = "#4facfe";
        } else if (currState === 2) {
          currState = 1;
          states[2].style.backgroundColor = "#16141c";
          back_transition[0].style.borderColor = "#4facfe";
          await wait();
          back_transition[0].style.borderColor = "white";
          states[1].style.backgroundColor = "#4facfe";
        } else {
          states[4].style.backgroundColor = "#16141c";
          self_loop[2].style.borderColor = "#4facfe";
          await wait();
          states[4].style.backgroundColor = "#4facfe";
          self_loop[2].style.borderColor = "white";
        }
      } else if(alphabet.textContent === "1") {
        if (currState === 0) {
          currState = 4;
          states[0].style.backgroundColor = "#16141c";
          back_transition[1].style.borderColor = "#4facfe";
          await wait();
          back_transition[1].style.borderColor = "white";
          states[4].style.backgroundColor = "#4facfe";
        } else if (currState === 1) {
          currState = 2;
          states[1].style.backgroundColor = "#16141c";
          transition[2].style.backgroundColor = "#4facfe";
          await wait();
          transition[2].style.backgroundColor = "white";
          states[2].style.backgroundColor = "#4facfe";
        } else if (currState === 2) {
          currState = 2;
          states[2].style.backgroundColor = "#16141c";
          self_loop[1].style.borderColor = "#4facfe";
          await wait();
          self_loop[1].style.borderColor = "white";
          states[2].style.backgroundColor = "#4facfe";
        } else {
          states[4].style.backgroundColor = "#16141c";
          self_loop[2].style.borderColor = "#4facfe";
          await wait();
          states[4].style.backgroundColor = "#4facfe";
          self_loop[2].style.borderColor = "white";
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
      <div class="container_for_visualization">
        <div class="transition">
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

        <div class="initial state_circle state">q0</div>

        <div class="transition">
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
          <span
            style={{ fontSize: "30px", position: "relative", top: "-28px" }}
          >
            0
          </span>
        </div>

        <div class="intermmediate state_circle state">q1</div>
        <div class="self-loop" style={{ left: "580px" }}>
          <span
            style={{
              fontSize: "30px",
              position: "absolute",
              top: "-28px",
              transform: "rotate(-41deg)",
              borderBottom: "white",
              borderRight: " white",
            }}
          >
            0
          </span>
        </div>

        <div class="transition">
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
          <span
            style={{ fontSize: "30px", position: "relative", top: "-24px" }}
          >
            1
          </span>
        </div>

        <div class="back-transition" style={{ left: "625px", top: "391px" }}>
          <span
            style={{
              fontSize: "60px",
              fontWeight: "50px",
              transform: "rotate(90deg)",
              position: "relative",
              top: "22px",
              left: "-13px",
              zIndex: "6",
            }}
          >
            ^
          </span>
          <span
            style={{
              fontSize: "30px",
              position: "relative",
              top: "0px",
              left: "60px",
            }}
          >
            0
          </span>
        </div>

        <div
          class="final state_circle"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div class="final-1 state_circle" style={{ width: "60px", height: "60px" }}>
            q2
          </div>
        </div>

        <div class="self-loop" style={{ right: "420px" }}>
          <span
            style={{
              fontSize: "30px",
              position: "absolute",
              top: "-32px",
              transform: "rotate(-41deg)",
              borderBottom: "white",
              borderRight: "white",
            }}
          >
            1
          </span>
        </div>

        <div
          class="back-transition"
          style={{
            left: "454px",
            width: "509px",
            height: "198px",
            top: "327px",
          }}
        >
          <span
            style={{
              right: "-13.5px",
              fontSize: "60px",
              fontWeight: "50px",
              transform: " rotate(8deg)",
              position: "absolute",
              top: "86px",
              zIndex: "6",
            }}
          >
            ^
          </span>

          <span
            style={{
              fontSize: "30px",
              position: "relative",
              top: "120px",
              left: "60px",
            }}
          >
            1
          </span>
        </div>

        <div
          class="trap state_circle"
          style={{
            marginLeft: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          #
        </div>

        <div class="self-loop" style={{ right: "280px" }}>
          <span
            style={{
              fontSize: "30px",
              position: "absolute",
              left: "-25px",
              top: "-28px",
              transform: "rotate(-41deg)",
              borderBottom: "white",
              borderRight: "white",
            }}
          >
            0,1
          </span>
        </div>
      </div>

      <div class="input-group_automata">
        <input
          value={elements}
          onChange={(e) => setElements(e.target.value)}
          type="text"
          class="input-field"
          placeholder="Enter array elements"
        />
        <button onClick={showElements}>Submit</button>
      </div>
    </div>
  );
};

export default StartWith0EndWith1;
