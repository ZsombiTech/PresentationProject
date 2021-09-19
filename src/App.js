import "./App.css";
import Boxes from "./components/Page1/Boxes";
import Boxes2 from "./components/Page2/Boxes2";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Boxes />
          </Route>
          <Route path="/second">
            <Boxes2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
