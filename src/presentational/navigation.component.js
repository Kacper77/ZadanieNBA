import React from "react";
import { Link } from "react-router";
import "./navigation.css";

const Navigation = props => (
    <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            {" "}
            Drużyny.js{" "}
          </Link>{" "}
        </div>{" "}
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              {" "}
              <Link to="/teams"> Teams </Link>
            </li>
            <li>
              {" "}
              <Link to="/StepByStep"> stepByStep </Link>
            </li>
            <li>
              {" "}
              <Link to="/WatchingLive"> WatchingLive </Link>
            </li>
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </nav>{" "}
    <div className="container-fluid"> {props.children} </div>{" "}
  </div>
);

export default Navigation;