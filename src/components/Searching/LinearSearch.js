export default function LinearElementSearch(
  array,
  elementWidth,
  setSearchNumber,
  setHeaderText,
  setInputFieldValue,
  containerSpace,
  searchedNumber,
  height
) {
  const childArray = document.querySelectorAll(".child");
  const len = array.length;
  let index = 0;
  let result = 0;
  let id = setInterval(() => {
    result = check(
      array,
      index,
      height,
      elementWidth,
      childArray[index],
      containerSpace,
      searchedNumber
    );
    console.log(`result of ${array[index]} is ${result}`);
    if (result) {
      clear(id);

      if (window.innerWidth > 681) {
        setHeaderText(`Element ${array[index]} found at ${index + 1}`);
        setTimeout(() => {
          setHeaderText("");
        }, 1500);
      } else {
        setHeaderText(`Element ${array[index]} found at ${index + 1}`);
      }
      setInputFieldValue("");
      setSearchNumber("");
      containerSpace.innerHTML = "";
      return;
    } else index++;
  }, 1000);

  setTimeout(() => {
    clearInterval(id);
    if (!result) {
      if (window.innerWidth > 681) {
        console.log("not found");
        setHeaderText(`Element ${searchedNumber} not found`);
        setTimeout(() => {
          setHeaderText("");
        }, 1500);
      } else {
        setHeaderText(`Element ${searchedNumber} not found`);
      }
      setInputFieldValue("");
      setSearchNumber("");
      containerSpace.innerHTML = "";
    }
  }, len * 1100);
}
function clear(id) {
  setTimeout(() => {
    clearInterval(id);
  }, 1000);
}

function check(
  array,
  index,
  height,
  elementWidth,
  oldChild,
  containerSpace,
  searchedNumber
) {
  const child = document.createElement("div");
  child.classList.add("child");
  child.style.width = elementWidth + "px";
  child.style.height = height[index] + "px";
  child.style.marginRight = "20px";
  child.style.backgroundColor = "yellow";
  child.style.color = "black";
  child.textContent = String(array[index]);
  containerSpace.replaceChild(child, oldChild);

  if (Number(searchedNumber) === array[index]) {
    console.log(Number(searchedNumber), array[index]);
    child.style.backgroundColor = "black";
    child.style.color = "white";
    return true;
  } else return false;
}
