let xcor = [0, 0, -1, 1];
let ycor = [-1, 1, 0, 0];
let arr = [];
function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 10));
}

// Algorithm
export default async function findPathBfs(sx, sy, dx, dy) {
  arr.push([sx, sy]);
  // let found = 0;
  while (Array.isArray(arr) && arr.length) {
    let sz = arr.length;
    while (sz--) {
      let coords = arr.shift();
      for (let i = 0; i < 4; i++) {
        const cells = document.querySelectorAll(".cells");
        let xcord = xcor[i] + coords[0];
        let ycord = ycor[i] + coords[1];
        console.log(xcord, ycord);

        if (
          xcord <= 0 ||
          ycord <= 0 ||
          xcord > 14 ||
          ycord > 38 ||
          (xcord - 1) * 38 + ycord >= 532 ||
          getComputedStyle(cells[(xcord - 1) * 38 + ycord]).backgroundColor !==
            "rgb(255, 255, 255)"
        ) {
          if (xcord === dx && ycord === dy) {
            if ((xcord - 1) * 38 + ycord > 532) continue;
          } else continue;
        }
        if (xcord === dx && ycord === dy) {
          cells[(xcord - 1) * 38 + ycord - 1].style.backgroundColor = "#adff2f";
          console.log("found");
          return;
        } else {
          cells[(xcord - 1) * 38 + ycord].textContent = "1";
          cells[(xcord - 1) * 38 + ycord].style.backgroundColor = "#d3d8f2";
          arr.push([xcord, ycord]);
        }
      }
      await sleep();
    }
  }
}
