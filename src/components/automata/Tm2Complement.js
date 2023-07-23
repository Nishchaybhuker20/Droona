import React from "react";
import "./endingwithab.css";

const Tm2Complement = () => {
  const [elements, setElements] = React.useState("");
  // const symbol = document.querySelector(".input-group_automata");
  const states = document.querySelectorAll(".state_circle");
  const transition = document.querySelectorAll(".transition");
  const self_loop = document.querySelectorAll(".self-loop");
  // const back_transition = document.querySelectorAll(".back-transition");

  function sleep() {
    return new Promise((resolve) => setTimeout(resolve, 1500));
  }
  function wait() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
  let currState = 0;
  // 0 for right and 1 for left
  let direction = 0;
  async function showSimulation(symbols) {
    console.log(symbols);
    for (const [index, alphabet] of symbols.entries()) {
      if (direction) {
        document.querySelectorAll(".input-group_automata span")[
          index
        ].style.backgroundColor = "orange";
      } else
        document.querySelectorAll(".input-group_automata span")[
          index
        ].style.backgroundColor = "#4facfe";
      console.log(alphabet.textContent, typeof alphabet.textContent, currState);
      if (alphabet.textContent === "0") {
        if (currState === 1) {
          transition[2].style.backgroundColor = "#4facfe";
          states[1].style.backgroundColor = "#16141c";
          await wait();
          transition[2].style.backgroundColor = "white";
          states[2].style.backgroundColor = "#4facfe";

          currState = 2;
        } else if (currState === 2) {
          self_loop[0].style.borderColor = "#4facfe";
          states[2].style.backgroundColor = "#16141c";
          await wait();
          self_loop[0].style.borderColor = "white";
          states[2].style.backgroundColor = "#4facfe";
        } else if (currState === 3) {
          self_loop[1].style.borderColor = "#4facfe";
          states[2].style.backgroundColor = "#16141c";
          await wait();
          self_loop[1].style.borderColor = "white";
          states[3].style.backgroundColor = "#4facfe";
        } else if (currState === 4) {
          self_loop[2].style.borderColor = "#4facfe";
          states[4].style.backgroundColor = "#16141c";
          await wait();
          self_loop[2].style.borderColor = "white";
          states[4].style.backgroundColor = "#4facfe";

          document.querySelectorAll(".input-group_automata span")[index].textContent =
            "1";
          await wait();
        }
      } else if (alphabet.textContent === "#") {
        if (currState === 0) {
          transition[1].style.backgroundColor = "#4facfe";
          console.log(transition[1].style.borderColor);
          states[0].style.backgroundColor = "#16141c";
          await wait();
          transition[1].style.backgroundColor = "white";
          states[1].style.backgroundColor = "#4facfe";

          currState = 1;
        } else if (currState === 2) {
          transition[3].style.backgroundColor = "#4facfe";
          states[2].style.backgroundColor = "#16141c";
          await wait();
          transition[3].style.backgroundColor = "white";
          states[3].style.backgroundColor = "#4facfe";

          currState = 3;
          direction = 1;
        } else if (currState === 4) {
          transition[5].style.backgroundColor = "#4facfe";
          states[4].style.backgroundColor = "#16141c";
          await wait();
          transition[5].style.backgroundColor = "white";
          states[5].style.backgroundColor = "#4facfe";

          currState = 5;
        }
      } else {
        if (currState === 1) {
          transition[2].style.backgroundColor = "#4facfe";
          states[1].style.backgroundColor = "#16141c";
          await wait();
          transition[2].style.backgroundColor = "white";
          states[2].style.backgroundColor = "#4facfe";

          currState = 2;
        } else if (currState === 2) {
          self_loop[0].style.borderColor = "#4facfe";
          states[2].style.backgroundColor = "#16141c";
          await wait();
          self_loop[0].style.borderColor = "white";
          states[2].style.backgroundColor = "#4facfe";
        } else if (currState === 3) {
          transition[4].style.backgroundColor = "#4facfe";
          states[3].style.backgroundColor = "#16141c";
          await wait();
          transition[4].style.backgroundColor = "white";
          states[4].style.backgroundColor = "#4facfe";

          currState = 4;
        } else if (currState === 4) {
          self_loop[2].style.borderColor = "#4facfe";
          states[4].style.backgroundColor = "#16141c";
          await wait();
          self_loop[2].style.borderColor = "white";
          states[4].style.backgroundColor = "#4facfe";

          document.querySelectorAll(".input-group_automata span")[index].textContent =
            "0";
          await wait();
        }
      }
      await sleep();
    }
    let index = symbols.length;
    while (index--) {
      if (index === symbols.length - 1) continue;
      if (direction) {
        document.querySelectorAll(".input-group_automata span")[
          index
        ].style.backgroundColor = "orange";
        await wait();
      } else
        document.querySelectorAll(".input-group_automata span")[
          index
        ].style.backgroundColor = "white";
      if (symbols[index].textContent === "0") {
        if (currState === 1) {
          transition[2].style.backgroundColor = "#4facfe";
          states[1].style.backgroundColor = "#16141c";
          await wait();
          transition[2].style.backgroundColor = "white";
          states[2].style.backgroundColor = "#4facfe";

          currState = 2;
        } else if (currState === 2) {
          self_loop[0].style.borderColor = "#4facfe";
          states[2].style.backgroundColor = "#16141c";
          await wait();
          self_loop[0].style.borderColor = "white";
          states[2].style.backgroundColor = "#4facfe";
        } else if (currState === 3) {
          self_loop[1].style.borderColor = "#4facfe";
          states[2].style.backgroundColor = "#16141c";
          await wait();
          self_loop[1].style.borderColor = "white";
          states[3].style.backgroundColor = "#4facfe";
        } else if (currState === 4) {
          self_loop[2].style.borderColor = "#4facfe";
          states[4].style.backgroundColor = "#16141c";
          await wait();
          self_loop[2].style.borderColor = "white";
          states[4].style.backgroundColor = "#4facfe";

          document.querySelectorAll(".input-group_automata span")[index].textContent =
            "1";
          await wait();
        }
      } else if (symbols[index].textContent === "#") {
        if (currState === 0) {
          transition[1].style.backgroundColor = "#4facfe";
          states[0].style.backgroundColor = "#16141c";
          await wait();
          transition[1].style.backgroundColor = "white";
          states[1].style.backgroundColor = "#4facfe";

          currState = 1;
        } else if (currState === 2) {
          transition[3].style.backgroundColor = "#4facfe";
          states[2].style.backgroundColor = "#16141c";
          await wait();
          transition[3].style.backgroundColor = "white";
          states[3].style.backgroundColor = "#4facfe";

          currState = 3;
          direction = 1;
        } else if (currState === 4) {
          transition[5].style.backgroundColor = "#4facfe";
          states[4].style.backgroundColor = "#16141c";
          await wait();
          transition[5].style.backgroundColor = "white";
          states[5].style.backgroundColor = "#4facfe";

          currState = 5;
        }
      } else {
        if (currState === 1) {
          transition[2].style.backgroundColor = "#4facfe";
          states[1].style.backgroundColor = "#16141c";
          await wait();
          transition[2].style.backgroundColor = "white";
          states[2].style.backgroundColor = "#4facfe";

          currState = 2;
        } else if (currState === 2) {
          self_loop[0].style.borderColor = "#4facfe";
          states[2].style.backgroundColor = "#16141c";
          await wait();
          self_loop[0].style.borderColor = "white";
          states[2].style.backgroundColor = "#4facfe";
        } else if (currState === 3) {
          transition[4].style.backgroundColor = "#4facfe";
          states[3].style.backgroundColor = "#16141c";
          await wait();
          transition[4].style.backgroundColor = "white";
          states[4].style.backgroundColor = "#4facfe";

          currState = 4;
        } else if (currState === 4) {
          self_loop[2].style.borderColor = "#4facfe";
          states[4].style.backgroundColor = "#16141c";
          await wait();
          self_loop[2].style.borderColor = "white";
          states[4].style.backgroundColor = "#4facfe";

          document.querySelectorAll(".input-group_automata span")[index].textContent =
            "0";
          await wait();
        }
      }
      await sleep();
    }

    setElements("");
    states[currState].style.backgroundColor = "#16141c";
    const spanChild = document.querySelectorAll(".input-group_automata span");
    spanChild.forEach((span)=>span.remove());
  }
  async function showElements() {
    const elements = document.querySelector(".input-field").value;
    const inputString = elements.split(" ");
    console.log(inputString);

    // adding blank at the begining
    const spanBeg = document.createElement("span");
    spanBeg.textContent = "#";
    document.querySelector(".input-group_automata").appendChild(spanBeg);

    // input string
    inputString.forEach((ele) => {
      const span = document.createElement("span");
      span.textContent = ele;
      console.log(span);
      document.querySelector(".input-group_automata").appendChild(span);
    });

    // adding blank at the end
    const spanEnd = document.createElement("span");
    spanEnd.textContent = "#";
    console.log(spanEnd);
    document.querySelector(".input-group_automata").appendChild(spanEnd);

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
              top: "-42px",
              zIndex: "6",
            }}
          >
            &gt;
          </span>
        </div>

        {/* <!-- initial state --> */}

        <div className="initial state_circle state">q0</div>

        {/* <!-- transition for q1 --> */}

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
            style={{
              fontSize: "30px",
              position: "relative",
              top: "-10px",
              left: "-28px",
            }}
          >
            #|#,R
          </span>
        </div>

        {/* <!-- q1 state --> */}

        <div className="intermmediate state_circle state">q1</div>

        {/* <!-- transition for q2 --> */}

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
            style={{
              fontSize: "30px",
              position: "relative",
              top: "-10px",
              left: "-28px",
            }}
          >
            0|0,R <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1|1,R
          </span>
        </div>

        {/* <!-- q2 state --> */}

        <div className="intermmediate state_circle state">q2</div>

        {/* <!-- self loop for q2 --> */}

        <div className="self-loop" style={{ left: "550px" }}>
          <span
            style={{
              fontSize: "30px",
              position: "absolute",
              top: "-28px",
              transform: "rotate(-41deg)",
              borderBottom: "white",
              borderRight: "white",
            }}
          >
            <span
              style={{
                fontSize: "30px",
                position: "relative",
                top: "-68px",
                left: "-17px",
              }}
            >
              0|0,R <br />
              1|1,R
            </span>
          </span>
        </div>

        {/* <!-- transition for q3 --> */}

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
            style={{
              fontSize: "30px",
              position: "relative",
              top: "-10px",
              left: "-16px",
            }}
          >
            #|#,L
          </span>
        </div>

        {/* <!-- q3 state --> */}

        <div
          className="final state_circle"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          q3
        </div>

        {/* <!-- self loop for q3 --> */}

        <div className="self-loop" style={{ left: "750px" }}>
          <span
            style={{
              fontSize: "30px",
              position: "absolute",
              top: "-28px",
              transform: "rotate(-41deg)",
              borderBottom: "white",
              borderRight: "white",
            }}
          >
            <span
              style={{
                fontSize: "30px",
                position: "relative",
                top: "-38px",
                left: "-17px",
              }}
            >
              0|0,L
            </span>
          </span>
        </div>

        {/* <!-- transition for q4 --> */}

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
            style={{
              fontSize: "30px",
              position: "relative",
              top: "-10px",
              left: "-28px",
            }}
          >
            1|1,L
          </span>
        </div>

        {/* <!-- q4 state --> */}

        <div
          className="trap state_circle"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          q4
        </div>

        {/* <!-- self loop for q4 --> */}

        <div className="self-loop" style={{ right: "260px" }}>
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
            <span
              style={{
                fontSize: "30px",
                position: "relative",
                top: "-37px",
              }}
            >
              0|1,L <br />
              1|0,L
            </span>
          </span>
        </div>

        {/* <!-- transition for halt accept --> */}

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
            style={{
              fontSize: "30px",
              position: "relative",
              top: "-10px",
              left: "-28px",
            }}
          >
            #|#,S
          </span>
        </div>

        {/* <!-- halt accept --> */}

        <div
          className="initial state_circle state"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          ha
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

export default Tm2Complement;
