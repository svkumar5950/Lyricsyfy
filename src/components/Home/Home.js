import React from "react";
import { Consumer } from "../../store/Content";
import Loader from "../../layouts/Loader";
import HomeContent from "./HomeContent";
import "./Home.scss";

function Home(props) {
  return (
    <Consumer>
      {value => {
        const { track_list, heading } = value;
        if (track_list === undefined || track_list.length === 0) {
          return <Loader />;
        } else {
          return (
            <div>
              <h2 className="header"> {heading} </h2>
              <div className="app-home">
                {track_list.map(songs => {
                  return (
                    <HomeContent key={songs.track.track_id} track={songs} />
                  );
                })}
              </div>
            </div>
          );
        }
      }}
    </Consumer>
  );
}

export default Home;
