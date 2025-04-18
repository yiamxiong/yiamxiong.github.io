// src/App.js
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import Main from "./containers/Main";
import DataAnalystAcademics from "./containers/academics/DataAnalystAcademics";
import { StyleProvider } from "./contexts/StyleContext"; // ✅ make sure this is imported

function App() {
  return (
    <StyleProvider> {/* ✅ Wrap the entire app */}
      <div className="dark-mode app-container">
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/data-analyst-academics" component={DataAnalystAcademics} />
          </Switch>
        </Router>
      </div>
    </StyleProvider>
  );
}

export default App;
