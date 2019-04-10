import React, { Fragment } from "react";
import { Consumer } from "../../store/Content";
import HomeContent from "./HomeContent";
import "./Home.scss";

function Home() {
  return (
    <Consumer>
      {value => {
        const { track_list } = value.topSongs;
        if (track_list === undefined || track_list.length === 0) {
          return <p>Loading...</p>;
        } else {
          return (
            <Fragment>
              {track_list.map(songs => {
                return <HomeContent key={songs.track.track_id} track={songs} />;
              })}
            </Fragment>
          );
        }
      }}
    </Consumer>
  );
}

export default Home;
