import React, { useState } from "react";
import "./App.css";
import Boxes from "./components/Page1/Boxes";
import Boxes2 from "./components/Page2/Boxes2";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const [itemek, setItemek] = useState([]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Boxes itemek={itemek} setItemek={setItemek} />
          </Route>
          <Route path="/second">
            <Boxes2 itemek1={itemek} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
