import "./App.css";
import FolderScreen from "./FolderScreen";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import ConvertScreen from "./CovertScreen";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/project" component={FolderScreen} />
            <Route exact path="/convert" component={ConvertScreen} />
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
