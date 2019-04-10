import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./layouts.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <h1 className="app-header-brand">
          <i className="fas fa-drum" />
          <Link to="/">Lycrisyfy</Link>
        </h1>
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div />
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <Link to="/">Songs</Link>
                  </li>
                  <li>
                    <Link to="/top_artists">Artists</Link>
                  </li>
                  <li>
                    <Link to="/top_album">Album</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
