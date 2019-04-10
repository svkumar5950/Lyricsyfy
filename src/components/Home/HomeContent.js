import React from "react";
import './Home.scss'
function HomeContent(props) {
  const {
    album_name,
    artist_id,
    artist_name,
    explicit,
    track_id,
    track_name,
    track_rating
  } = props.track.track;
  return (
    <div className="app-homeContent">
      <h2>{album_name}</h2>
      <h3>{artist_name}</h3>
      <h5>{track_name}</h5>
      <p>{track_rating}</p>
    </div>
  );
}

export default HomeContent;
