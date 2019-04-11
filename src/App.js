import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "./store/Content";
import Header from "./layouts/Header";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import "./App.scss";
import LyricsContent from "./components/Lyrics/LyricsContent";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <Search />
            <Route exact path="/Lyricsyfy" component={Home} />
            <Route path="/Lyricsyfy/top_songs/:id" component={LyricsContent} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
