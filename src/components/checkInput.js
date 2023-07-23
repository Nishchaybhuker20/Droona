import LinearElementSearch from "./Searching/LinearSearch.js";
import BinaryElementSearch from "./Searching/BinarySearch.js";
import sortElementBubble from "./Sorting/BubbleSort";
import sortElementSelection from "./Sorting/SelectionSort";
import sortElementInsertion from "./Sorting/InsertionSort";
import sortElementQuick from "./Sorting/QuickSort";
import sortElementMerge from "./Sorting/MergeSort";

let height = [];
let sortArray = false;

export default function checkInput(
  e,
  headerText,
  setHeaderText,
  inputFieldValue,
  setInputFieldValue,
  searchedNumber,
  setSearchNumber,
  containerSpace,
  props
) {
  console.log("reacged");
  if (inputFieldValue === "") {
    if (window.innerWidth > 681) {
      setHeaderText("Enter Array!!! This field can't be empty");
      setTimeout(() => {
        setHeaderText("");
      }, 1500);
    } else {
      setHeaderText("Enter Array!!! This field can't be empty");
      setTimeout(() => {
        setHeaderText("");
      }, 1500);
    }
    return;
  } else if (searchedNumber !== undefined && Number(props.id) < 2) {
    if (searchedNumber === "" || isNaN(Number(searchedNumber))) {
      if (window.innerWidth > 681) {
        setHeaderText(
          "Enter Number To Be Searched!!! This field can't be empty nor it can't be empty"
        );
        setTimeout(() => {
          setHeaderText("");
          setInputFieldValue("");
        }, 1500);
      } else {
        setHeaderText(
          "Enter Number To Be Searched!!! This field can't be empty nor it can't be empty"
        );
      }
      return;
    }
  }
  showArray(
    headerText,
    setHeaderText,
    inputFieldValue,
    setInputFieldValue,
    searchedNumber,
    setSearchNumber,
    containerSpace,
    props
  );
}

function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 1500));
}

async function showArray(
  headerText,
  setHeaderText,
  inputFieldValue,
  setInputFieldValue,
  searchedNumber,
  setSearchNumber,
  containerSpace,
  props
) {
  console.log(inputFieldValue);

  const arr = inputFieldValue.split(" ");

  let isValid = 1;
  for (var ele in arr) {
    console.log(Number(ele), typeof Number(ele));
    if (isNaN(Number(ele))) {
      if (window.innerWidth > 681) {
        setHeaderText("Enter a valid Array");
        setTimeout(() => {
          setHeaderText("");
        }, 1000);
      } else {
        setHeaderText("Enter a valid Array");
      }
      isValid = 0;
      containerSpace.innerHTML = "";

      break;
    }
  }

  if (isValid === 0) return;
  const array = arr.map((ele) => Number(ele));
  const totalWidth = containerSpace.offsetWidth - array.length - 1;
  const totalHeight = containerSpace.offsetHeight;
  const elementWidth = totalWidth / array.length;
  const arrayCopy = [...array];
  arrayCopy.sort();

  if (Number(props.id) === 1 && sortArray) {
    containerSpace.innerHTML = "";
    array.sort();
  }
  const elementHeight = totalHeight - array.length * 20;

  array.forEach((ele, index) => {
    console.log(ele);
    const child = document.createElement("div");
    child.classList.add("child");

    console.log(
      `element height is${elementHeight} and total height is ${totalHeight}`
    );
    child.style.width = elementWidth + "px";
    child.style.height = elementHeight + arrayCopy.indexOf(ele) * 10 + "px";

    child.style.marginRight = "20px";
    child.style.backgroundColor = "greenyellow";
    child.style.color = "black";
    child.textContent = String(ele);
    height.push(elementHeight + arrayCopy.indexOf(ele) * 10);
    containerSpace.append(child);
  });

  if (Number(props.id) === 1 && !sortArray) {
    console.log("inside waiting for sleep to call");
    sortArray = true;
    await sleep();
    console.log("sleep has been called");
    showArray();
    array.sort();
    BinaryElementSearch(
      array,
      elementWidth,
      setSearchNumber,
      setHeaderText,
      setInputFieldValue,
      containerSpace,
      searchedNumber,
      height
    );
  }

  if (Number(props.id) === 0)
    LinearElementSearch(
      array,
      elementWidth,
      setSearchNumber,
      setHeaderText,
      setInputFieldValue,
      containerSpace,
      searchedNumber,
      height
    );
  else if (Number(props.id) === 2) {
    sortElementBubble(array);
  } else if (Number(props.id) === 3) {
    sortElementSelection(array);
  } else if (Number(props.id) === 4) {
    sortElementInsertion(array);
  } else if (Number(props.id) === 5) {
    sortElementQuick(array, height, setHeaderText, headerText);
  } else if (Number(props.id) === 6) {
    sortElementMerge(array, height, setHeaderText, headerText);
  }
}
