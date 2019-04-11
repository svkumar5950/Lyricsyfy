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
      </div>
    );
  }
}
