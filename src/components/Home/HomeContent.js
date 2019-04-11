import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
function HomeContent(props) {
  const {
    album_name,
    artist_name,
    track_id,
    explicit,
    track_name
  } = props.track.track;
  return (
    <div className="app-homeContent">
      <h2>
        <i className="fas fa-compact-disc" /> {album_name}
      </h2>
      <h3>{artist_name}</h3>
      <h5>{track_name}</h5>
      <span>
        {explicit === 0 ? (
          <i className="fas fa-thumbs-up" />
        ) : (
          <i className="fas fa-thumbs-down" />
        )}
      </span>
      <button>
        <Link to={`/Lyricsyfy/top_songs/${track_id}`}>
          <i className="fab fa-readme" />
          Lyrics
        </Link>
      </button>
    </div>
  );
}

export default HomeContent;
