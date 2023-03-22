// rcc
import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Dnd React
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/allclasses">
                  All Classes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/races">
                  All Races
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/feats">
                  All Feats
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rolldice">
                  Roll Dice
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
