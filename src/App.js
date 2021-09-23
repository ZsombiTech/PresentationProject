import React, { useState } from "react";
import "./App.css";
import Boxes from "./components/Page1/Boxes";
import Boxes2 from "./components/Page2/Boxes2";
import Boxes3 from "./components/Page3/Boxes3";
import Boxes4 from "./components/Page4/Boxes4";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [itemek, setItemek] = useState([]);
  const [itemek2, setItemek2] = useState([]);
  const [itemek3, setItemek3] = useState([]);

  const results = {
    points_courier: itemek,
  };

  const results2 = {
    points_from: itemek2,
  };
  const results3 = {
    points_to: itemek3,
  };
  const results_ossz = {
    points_courier: itemek,
    points_from: itemek2,
    points_to: itemek3,
  };

  const results_json = JSON.stringify(results_ossz);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Boxes itemek={itemek} setItemek={setItemek} />
          </Route>
          <Route path="/second">
            <Boxes2
              itemek1={itemek}
              itemek2={itemek2}
              setItemek2={setItemek2}
            />
          </Route>
          <Route path="/third">
            <Boxes3
              itemek1={itemek}
              itemek2={itemek2}
              itemek3={itemek3}
              setItemek3={setItemek3}
            />
          </Route>
          <Route path="/fourth">
            <Boxes4 results={results} results2={results2} results3={results3} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
