function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 1500));
}

export default async function BinaryElementSearch(
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
  let found = 0;
  let low = 0,
    high = len - 1;

  while (low <= high) {
    let mid = Number.parseInt((low + high) / 2);
    console.log(mid, array[mid]);

    childArray[mid].style.backgroundColor = "lightBlue";
    childArray[mid].style.color = "black";

    await sleep();
    childArray[mid].style.backgroundColor = "yellow";
    childArray[mid].style.color = "white";
    if (array[mid] === Number(searchedNumber)) {
      childArray[mid].style.backgroundColor = "black";
      await sleep();

      if (window.innerWidth > 681) {
        setHeaderText(`Number found at ${mid + 1} position`);
        setTimeout(() => {
          setHeaderText("");
          // header.style.display = "none";
        }, 2000);
      } else {
        setHeaderText(`Number found at ${mid + 1} position`);
      }
      found = 1;
      setInputFieldValue("");
      setSearchNumber("");
      containerSpace.innerHTML = "";
      break;
    } else if (array[mid] > Number(searchedNumber)) {
      high = mid - 1;
    } else if (array[mid] < Number(searchedNumber)) low = mid + 1;
  }
  if (found === 0) {
    if (window.innerWidth > 681) {
      setHeaderText(`Number ${searchedNumber} not found `);
      setTimeout(() => {
        setHeaderText("");
      }, 2000);
    } else {
      setHeaderText(`Number ${searchedNumber} not found `);
    }
    setInputFieldValue("");
    setSearchNumber("");
    containerSpace.innerHTML = "";
  }
}
