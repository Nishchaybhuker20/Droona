let heights = new Map();

const color = ["blue", "green", "lightBlue", "yellow"];

// color for merging elements
const mergeColor = ["violet", "greenyellow", "orange"];

function getHeight(array, height) {
  const arrayCopy = [...array];
  arrayCopy.sort();

  arrayCopy.forEach((ele, index) => {
    heights.set(`${ele}`, height[index]);
  });
}

// sleep function to pause the execution of the code
function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}
export default function sortElementMerge(
  array,
  height,
  setHeaderText,
  headerText
) {
  const len = array.length;

  getHeight(array, height);

  // Algorithm for sorting
  mergeSort(0, len - 1, array, setHeaderText, headerText);
}

async function mergeSort(l, r, array, setHeaderText, headerText) {
  if (l >= r) return;
  let mid = Number.parseInt((l + r) / 2);

  // l to mid

  await addElements(l, mid);
  setHeaderText(
    `Divided the array and calling mergeSort from elements ${l + 1} (${
      array[l]
    }) to ${mid + 1} (${array[mid]})`
  );
  await sleep();
  await mergeSort(l, mid, array, setHeaderText, headerText);

  // mid+1 to r
  await addElements(mid + 1, r);
  setHeaderText(
    `Divided the array and calling mergeSort from elements ${mid + 2} (${
      array[mid + 1]
    }) to ${r + 1} (${array[r]})`
  );
  await sleep();
  await mergeSort(mid + 1, r, array, setHeaderText, headerText);

  // merge
  await merge(l, r, mid, array, setHeaderText, headerText);
}

async function merge(l, r, mid, array, setHeaderText, headerText) {
  setHeaderText(
    `Merging from position ${l + 1} (${array[l]}) to ${r + 1} (${array[r]})`
  );
  await sleep();
  const childArray = document.querySelectorAll(".child");
  let leftArray = [],
    rightArray = [];

  for (let i = l; i <= mid; i++) {
    leftArray.push(array[i]);
  }

  for (let i = mid + 1; i <= r; i++) {
    rightArray.push(array[i]);
  }

  leftArray.push(Number.MAX_VALUE);
  rightArray.push(Number.MAX_VALUE);
  let lsize = 0,
    rsize = 0;
  const colorChild = Math.floor(Math.random() * 3);
  console.log(colorChild, "color child ");

  for (let i = l; i <= r; i++) {
    if (leftArray[lsize] < rightArray[rsize]) {
      array[i] = leftArray[lsize];

      childArray[i].textContent = String(leftArray[lsize]);
      childArray[i].style.height = heights.get(`${array[i]}`);
      childArray[i].style.backgroundColor = mergeColor[colorChild];

      await sleep();
      lsize++;
    } else {
      array[i] = rightArray[rsize];

      childArray[i].textContent = String(rightArray[rsize]);
      childArray[i].style.height = heights.get(`${array[i]}`);
      childArray[i].style.backgroundColor = mergeColor[colorChild];
      await sleep();
      rsize++;
    }
  }
  setHeaderText("");
}

async function addElements(l, r) {
  console.log("add");
  const childArray = document.querySelectorAll(".child");

  const colorChild = Math.floor(Math.random() * 3);
  for (let i = l; i <= r; i++) {
    childArray[i].style.backgroundColor = color[colorChild];
  }
  await sleep();
}
