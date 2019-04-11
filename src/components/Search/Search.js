import React, { Component } from "react";
import { Consumer } from "../../store/Content";
import "./Search.scss";
import Axios from "axios";
import KEY from "../../config";

class Search extends Component {
  state = {
    search_title: ""
  };
  handleSubmit = (dispatch, e) => {
    e.preventDefault();

    Axios.get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${
        this.state.search_title
      }&page_size=20&page=1&s_track_rating=desc&apikey=${KEY}`
    ).then(res => {
      dispatch({
        type: "SEARCH_TRACKS",
        payload: res.data.message.body.track_list
      });
    });
    this.setState({ search_title: "" });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="app-searchbar">
              <h1>
                <i className="fas fa-music" /> ..Search your Songs, Artists,
                Artists
              </h1>
              <form onSubmit={this.handleSubmit.bind(this, value.dispatch)}>
                <input
                  type="text"
                  placeholder="Search Songs, Albums or Artists....."
                  name="search_title"
                  value={this.state.search_title}
                  onChange={this.handleChange}
                />
                <input type="submit" value="Search" />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
