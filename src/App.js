import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./store/Content";
import Header from "./layouts/Header";
import Home from "./components/Home/Home";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <Home />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
