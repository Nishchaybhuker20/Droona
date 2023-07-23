import { React, useState } from "react";
import "./algo.css";
import checkInput from "./checkInput";

const Template = (props) => {
  const [inputFieldValue, setInputFieldValue] = useState("");
  const [searchedNumber, setSearchNumber] = useState("");
  const [headerText, setHeaderText] = useState("");

  const containerSpace = document.querySelector(".container-space");

  return (
    <div className="body">
      <h1>{props.heading} </h1>
      <header>
        <div className="headerText">{headerText}</div>
      </header>

      <div className="container">
        <div className="info">
          <h1>Some Instructions For Visualizing it</h1>
          <p>{props.desc}</p>

          <h3>
            * Entering array and number to be searched is an mandatory field
          </h3>
          <h3>
            Add Array Elemnts separated by space, Space will be considered as
            spliting point
          </h3>
          <h3>Ex - 3 4 5 6</h3>
          <h3>3456 will be considered as one number</h3>
        </div>
        <div className="show-array">
          <div className="container-space"></div>
        </div>
      </div>

      <div className="input-field-container">
        <input
          value={inputFieldValue}
          type="text"
          className="input-field"
          placeholder="Enter array elements"
          onChange={(e) => setInputFieldValue(e.target.value)}
        />
        {Number(props.id) < 2 ? (
          <input
            value={searchedNumber}
            type="text"
            className="input-field search"
            placeholder="Searching Number"
            onChange={(e) => setSearchNumber(e.target.value)}
          />
        ) : (
          <input
            type="reset"
            className="input-field clear"
            placeholder="Clear fields"
            onClick={() => {
              setInputFieldValue("");
              setHeaderText("");
              containerSpace.innerHTML = "";
            }}
          />
        )}

        <input
          onClick={(e) => {
            checkInput(
              e,
              headerText,
              setHeaderText,
              inputFieldValue,
              setInputFieldValue,
              searchedNumber,
              setSearchNumber,
              containerSpace,
              props
            );
          }}
          type="submit"
          className="input-field submit"
          value="SUBMIT"
        />
      </div>
    </div>
  );
};

export default Template;
