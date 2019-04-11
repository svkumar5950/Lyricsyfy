import React, { Component } from "react";
import "./Search.scss";

class Search extends Component {
  render() {
    return (
      <div className="app-searchbar">
        <h1>
          <i className="fas fa-music" /> ..Search your Songs, Artists, Artists
        </h1>
        <form>
          <input
            type="text"
            placeholder="Search Songs, Albums or Artists....."
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Search;
