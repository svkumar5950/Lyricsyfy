import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "../../layouts/Loader";
import Axios from "axios";
import KEY from "../../config";
import "./Lyrics.scss";

export default class LyricsContent extends Component {
  state = {
    lyrics: {},
    track: {}
  };
  componentWillMount = () => {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
        this.props.match.params.id
      }&apikey=${KEY}`
    ).then(res => this.setState({ lyrics: res.data.message.body.lyrics }));
  };

  render() {
    const { lyrics_body } = this.state.lyrics;
    return this.state.lyrics === undefined ||
      this.state.track === undefined ||
      Object.keys(this.state.lyrics).length === 0 ? (
      <Loader />
    ) : (
      <div className="app-lyricsComponent">
        <button>
          <Link to="/Lyricsyfy">
            <i className="fas fa-angle-double-left" />
          </Link>
        </button>
        <p>
          {lyrics_body}
          <span>Sorry !!!, You can get only 30% of Lyrics</span>
        </p>
      </div>
    );
  }
}
