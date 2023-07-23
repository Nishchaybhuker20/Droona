import React from "react";

const ExactlyFourOnes = () => {
  const [elements, setElements] = React.useState("");
  // const symbol = document.querySelector(".input-group_automata");
  const states = document.querySelectorAll(".state_circle");
  const transition = document.querySelectorAll(".transition");
  const self_loop = document.querySelectorAll(".self-loop");
  // const back_transition = document.querySelectorAll(".back-transition");
  // console.log(transition);
  function sleep() {
    return new Promise((resolve) => setTimeout(resolve, 1500));
  }
  function wait() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  let currState = 0;
  async function showSimulation(symbols) {
    // console.log(symbols);
    for (const [index, alphabet] of symbols.entries()) {
      document.querySelectorAll(".input-group_automata span")[
        index
      ].style.backgroundColor = "#4facfe";
      // console.log(alphabet.textContent,typeof(alphabet.textContent),currState);
      if (alphabet.textContent === "0") {
        if (currState === 0) {
          self_loop[0].style.borderColor = "#4facfe";
          states[0].style.backgroundColor = "#16141c";
          await wait();

          self_loop[0].style.borderColor = "white";
          states[0].style.backgroundColor = "#4facfe";
        } else if (currState === 1) {
          self_loop[1].style.borderColor = "#4facfe";
          states[1].style.backgroundColor = "#16141c";
          await wait();

          self_loop[1].style.borderColor = "white";
          states[1].style.backgroundColor = "#4facfe";
        } else if (currState === 2) {
          self_loop[2].style.borderColor = "#4facfe";
          states[2].style.backgroundColor = "#16141c";
          await wait();

          self_loop[2].style.borderColor = "white";
          states[2].style.backgroundColor = "#4facfe";
        } else if (currState === 3) {
          self_loop[3].style.borderColor = "#4facfe";
          states[3].style.backgroundColor = "#16141c";
          await wait();

          self_loop[3].style.borderColor = "white";
          states[3].style.backgroundColor = "#4facfe";
        } else if (currState === 4) {
          self_loop[4].style.borderColor = "#4facfe";
          states[4].style.backgroundColor = "#16141c";
          await wait();

          self_loop[4].style.borderColor = "white";
          states[4].style.backgroundColor = "#4facfe";
        } else {
          self_loop[5].style.borderColor = "#4facfe";
          states[6].style.backgroundColor = "#16141c";
          await wait();

          self_loop[5].style.borderColor = "white";
          states[6].style.backgroundColor = "#4facfe";
        }
      } else if (alphabet.textContent === "1"){
        if (currState === 0) {
          currState = 1;
          states[0].style.backgroundColor = "#16141c";
          transition[1].style.backgroundColor = "#4facfe";
          console.log(transition[1]);
          await wait();
          transition[1].style.backgroundColor = "white";
          states[1].style.backgroundColor = "#4facfe";
        } else if (currState === 1) {
          currState = 2;
          states[1].style.backgroundColor = "#16141c";
          transition[2].style.backgroundColor = "#4facfe";
          console.log(transition[2]);
          await wait();
          transition[2].style.backgroundColor = "white";
          states[2].style.backgroundColor = "#4facfe";
        } else if (currState === 2) {
          currState = 3;
          states[2].style.backgroundColor = "#16141c";
          transition[3].style.backgroundColor = "#4facfe";
          console.log(transition[3]);
          await wait();
          transition[3].style.backgroundColor = "white";
          states[3].style.backgroundColor = "#4facfe";
        } else if (currState === 3) {
          currState = 4;
          states[3].style.backgroundColor = "#16141c";
          transition[4].style.backgroundColor = "#4facfe";
          console.log(transition[4]);
          await wait();
          transition[4].style.backgroundColor = "white";
          states[4].style.backgroundColor = "#4facfe";
        } else if (currState === 4) {
          currState = 6;
          states[4].style.backgroundColor = "#16141c";
          console.log(transition[5]);
          transition[5].style.backgroundColor = "#4facfe";
          await wait();
          transition[5].style.backgroundColor = "white";
          states[6].style.backgroundColor = "#4facfe";
        } else {
          self_loop[6].style.borderColor = "#4facfe";
          states[6].style.backgroundColor = "#16141c";
          await wait();

          self_loop[6].style.backgroundColor = "white";
          states[6].style.borderColor = "#4facfe";
        }
      }
      await sleep();
    }

    states[4].style.backgroundColor = "#16141c";
    symbols.forEach((_, index) => {
      symbols[index].style.backgroundColor = "slateblue";
    });
    if (currState === 4) alert("String is accepted");
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

        {/* <!-- self loop on initial state --> */}
        <div className="self-loop" style={{ left: "150px" }}>
          <span
            style={{
              fontSize: "30px",
              position: "absolute",
              top: " -38px",
              transform: "rotate(-41deg)",
              borderBottom: "#16141c",
              borderRight: "#16141c",
            }}
          >
            0
          </span>
        </div>

        {/* <!-- transiion to q1 --> */}

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
          <span
            style={{ fontSize: "30px", position: "relative", top: "-24px" }}
          >
            1
          </span>
        </div>

        {/* <!-- q1 state --> */}
        <div className="intermmediate state_circle state">q1</div>

        {/* <!-- self loop on q1 --> */}
        <div className="self-loop" style={{ left: "350px" }}>
          <span
            style={{
              fontSize: "30px",
              position: "absolute",
              top: "-38px",
              transform: "rotate(-41deg)",
              borderBottom: "white",
              borderRight: "white",
            }}
          >
            0
          </span>
        </div>

        {/* <!-- transition to q2 --> */}

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
          <span
            style={{ fontSize: "30px", position: "relative", top: "-24px" }}
          >
            1
          </span>
        </div>

        {/* <!-- q2 state --> */}

        <div className="intermmediate state_circle state">q2</div>

        {/* <!-- self loop on q2 --> */}
        <div className="self-loop" style={{ left: "550px" }}>
          <span
            style={{
              fontSize: "30px",
              position: "absolute",
              top: "-38px",
              transform: "rotate(-41deg)",
              borderBottom: "white",
              borderRight: "white,",
            }}
          >
            0
          </span>
        </div>

        {/* <!-- transition to q3 --> */}

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
          <span
            style={{ fontSize: "30px", position: "relative", top: "-24px" }}
          >
            1
          </span>
        </div>

        {/* <!-- q3 state --> */}

        <div className="intermmediate state_circle state">q3</div>

        {/* <!-- self loop on q3 --> */}
        <div className="self-loop" style={{ left: "750px" }}>
          <span
            style={{
              fontSize: "30px",
              position: "absolute",
              top: "-38px",
              transform: "rotate(-41deg)",
              borderBottom: "white",
              borderRight: "white",
            }}
          >
            0
          </span>
        </div>

        {/* <!-- transition to q4 / FINAL STATE--> */}

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
          <span
            style={{ fontSize: "30px", position: "relative", top: "-24px" }}
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
            q4
          </div>
        </div>
        {/* <!-- final state self loop --> */}
        <div className="self-loop" style={{ right: "255px" }}>
          <span
            style={{
              fontSize: "30px",
              position: "absolute",
              top: "-38px",
              transform: "rotate(-41deg)",
              borderBottom: "white",
              borderRight: "white",
            }}
          >
            0
          </span>
        </div>

        {/* <!-- trap state transition --> */}

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
          <span
            style={{ fontSize: "30px", position: "relative", top: "-24px" }}
          >
            1
          </span>
        </div>
        <div
          className="trap state_circle"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          #
        </div>
        {/* <!-- self loop --> */}
        <div className="self-loop" style={{ right: "60px" }}>
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

export default ExactlyFourOnes;
