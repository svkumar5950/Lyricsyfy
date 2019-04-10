import React, { Component } from "react";
import axios from "axios";
import KEY from "../config";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    topSongs: {
      track_list: []
    },
    topArtists: {
      track_list: []
    },
    topSearch: {
      track_list: []
    }
  };
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=20&country=us&f_has_lyrics=1&apikey=${KEY}`
      )
      .then(res =>
        this.setState({
          topSongs: { track_list: res.data.message.body.track_list }
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
