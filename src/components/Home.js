import React from "react";
import { Consumer } from "../store/Content";

function Home() {
  return (
    <Consumer>
      {value => {
        console.log(value);
        return <h1>yfy</h1>;
      }}
    </Consumer>
  );
}

export default Home;
