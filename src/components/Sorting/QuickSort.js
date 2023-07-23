let heights = new Map();

// color for separating elements
const color = ["blue", "green", "lightBlue", "yellow"];
// color for merging elements
// const mergeColor = ["violet", "greenyellow", "orange"];

// sleep function to pause the execution of the code
function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 1500));
}

function getHeight(array, height) {
  const arrayCopy = [...array];
  arrayCopy.sort();

  arrayCopy.forEach((ele, index) => {
    heights.set(`${ele}`, height[index]);
  });
}

export default function sortElementQuick(
  array,
  height,
  setHeaderText,
  headerText
) {
  const len = array.length;

  getHeight(array, height);

  // Algorithm for sorting
  partitonSort(0, len - 1, array, setHeaderText, headerText);
  // addElements(0,len-1);
}

async function partitonSort(l, r, array, setHeaderText, headerText) {
  if (l >= r) return;

  let p = await partition(l, r, array, setHeaderText, headerText);

  setHeaderText(`Array is partitioned from index ${l + 1} 
    (${array[l]}) to ${p + 1} (${array[p]}) and  ${p + 2} (${
    array[p + 1]
  }) to ${r + 1} (${array[r]})`);
  await sleep();
  await sleep();

  setHeaderText(
    `Applying Quick Sort from index ${l + 1} (${array[l]}) to ${p + 1} (${
      array[p]
    }) `
  );
  await sleep();
  await addElements(l, p, setHeaderText, headerText);
  await partitonSort(l, p, array, setHeaderText, headerText);

  setHeaderText(
    `Applying Quick Sort from index ${p + 2} (${array[p + 1]}) to ${r + 1} (${
      array[r]
    }) `
  );
  await sleep();
  await addElements(p + 1, r, setHeaderText, headerText);
  await partitonSort(p + 1, r, array, setHeaderText, headerText);
}

async function partition(l, r, array, setHeaderText, headerText) {
  const childArray = document.querySelectorAll(".child");
  let pivot = array[l];
  setHeaderText(`Pivot element is ${array[l]}`);
  await sleep();

  const prevColor = childArray[l].style.backgroundColor;
  childArray[l].style.backgroundColor = "darkorange";
  await sleep();
  let low = l - 1,
    high = r + 1;
  while (true) {
    do {
      setHeaderText(
        "Checking first greater element than pivot from left side..-----> "
      );
      low++;
      if (array[low] !== pivot) {
        childArray[low].style.backgroundColor = "coral";
        let text = headerText;
        text += `Checking whether ${array[low]} is greater than pivot ${pivot}?`;
        setHeaderText(text);
        await sleep();
        if (array[low] < pivot)
          childArray[low].style.backgroundColor = prevColor;
      }
    } while (array[low] < pivot);

    do {
      setHeaderText(
        "Checking first smaller element than pivot from right side..-----> "
      );
      high--;
      if (array[high] !== pivot) {
        childArray[high].style.backgroundColor = "deeppink";
        let text = headerText;
        text += `Checking whether ${array[high]} is smaller than pivot ${pivot}?`;
        setHeaderText(text);
        await sleep();
        if (array[high] > pivot)
          childArray[high].style.backgroundColor = prevColor;
      }
    } while (array[high] > pivot);

    if (low >= high) {
      childArray[low].style.backgroundColor = prevColor;
      return high;
    } else {
      setHeaderText(`Swapping ${array[low]} and ${array[high]}`);
      await sleep();

      //   exchanging height
      const hi = childArray[high].style.height;
      childArray[high].style.height = childArray[low].style.height;
      childArray[low].style.height = hi;

      const temp = array[high];
      // swapping childarray text
      childArray[high].textContent = array[low];
      childArray[low].textContent = array[high];

      //   swappping array elements
      array[high] = array[low];
      array[low] = temp;

      // console.log(array[low],array[high]);

      // changing color to back
      childArray[low].style.backgroundColor = prevColor;
      childArray[high].style.backgroundColor = prevColor;

      if (array[high] === pivot) {
        childArray[high].style.backgroundColor = "darkorange";
      }
    }
  }
}
async function addElements(l, r) {
  console.log("add");
  const childArray = document.querySelectorAll(".child");

  const colorChild = Math.floor(Math.random() * 3);
  for (let i = l; i <= r; i++) {
    childArray[i].style.backgroundColor = color[colorChild];
  }
}
