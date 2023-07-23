import { Link } from "react-router-dom";
import React from "react";

const automata = [
  { name: "Ending with ab", path: "/endingwithab" },
  { name: "Even 0 and odd 1", path: "/even0odd1" },
  { name: "Start with 0 and end with 1", path: "/startwith0andendwith1" },
  { name: "Containing exactly four ones", path: "/exactlyfourones" },
  { name: "Tm for 2's Complement", path: "/complement" },
];

const searching = [
  { name: "Linear Search", path: "/linearsearch" },
  { name: "Binary Search", path: "/binarysearch" },
  { name: "Breadth First Search", path: "/bfs" },
  { name: "Depth First Search", path: "/dfs" },
  { name: "Shortest Path Algorithm", path: "/shortestpathalgorithm" },
];
const sorting = [
  { name: "Bubble Sort", path: "/bubblesort" },
  { name: "Selection Sort", path: "/selectionsort" },
  { name: "Insertion Sort", path: "/insertionsort" },
  { name: "Quick Sort", path: "/quicksort" },
  { name: "Merge Sort", path: "/mergesort" },
];

const ChangeNavigation = (tab) => {
  if (tab === 0) {
    return searching.map((element, index) => {
      return (
        <Link to={searching[index].path} key={index}>
          <li className="cell ">
            <div className="cell-child">
              <div className="cell_box">
                <div className="cell_title">{searching[index].name}</div>
              </div>
            </div>
          </li>
        </Link>
      );
    });
  } else if (tab === 1) {
    return sorting.map((element, index) => {
      return (
        <Link to={sorting[index].path} key={index}>
          <li className="cell ">
            <div className="cell-child">
              <div className="cell_box">
                <div className="cell_title">{sorting[index].name}</div>
              </div>
            </div>
          </li>
        </Link>
      );
    });
  } else if (tab === 2) {
    return automata.map((element, index) => {
      return (
        <Link to={automata[index].path} key={index}>
          <li className="cell ">
            <div className="cell-child">
              <div className="cell_box">
                <div className="cell_title">{automata[index].name}</div>
              </div>
            </div>
          </li>
        </Link>
      );
    });
  }
};

export default ChangeNavigation;
