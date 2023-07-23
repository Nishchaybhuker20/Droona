import Header from "./components/Header";
import Visualize from "./components/AlgoNavbar";
import { Routes, Route } from "react-router";
import Template from "./components/Template";
import SearchingTemplate from "./components/SearchingTemplate";
import description from "./visualizationData";
import ShortestPathTemplate from "./components/Searching/ShortestPathTemplate";
import EndingWithab from "./components/automata/EndingWithab";
import Even0Odd1 from "./components/automata/Even0Odd1";
import ExactlyFourOnes from "./components/automata/ExactlyFourOnes";
import StartWith0EndWith1 from "./components/automata/StartWith0EndWith1";
import Tm2Complement from "./components/automata/Tm2Complement";

function App() {
  return (
    <>
      <Routes>
        {/* initial path */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Visualize />
            </>
          }
        />
        {description.map((routes, index) => {
          return index < 7 ? (
            <Route
              exact
              path={routes.path}
              key={index}
              element={
                <Template
                  heading={routes.heading}
                  desc={routes.desc}
                  id={routes.id}
                />
              }
            ></Route>
          ) : index === 9 ? (
            <Route
              exact
              path={routes.path}
              key={index}
              element={<ShortestPathTemplate />}
            ></Route>
          ) : (
            <Route
              exact
              path={routes.path}
              key={index}
              element={<SearchingTemplate id={routes.id} />}
            ></Route>
          );
        })}
        <Route exact path="/endingwithab" element={<EndingWithab />}></Route>

        <Route exact path="/even0odd1" element={<Even0Odd1 />}></Route>
        <Route
          exact
          path="/exactlyfourones"
          element={<ExactlyFourOnes />}
        ></Route>
        <Route
          exact
          path="/startwith0andendwith1"
          element={<StartWith0EndWith1 />}
        ></Route>
        <Route exact path="/complement" element={<Tm2Complement />}></Route>
      </Routes>
    </>
  );
}

export default App;
