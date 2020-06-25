import React, { Component, Fragment } from 'react';
import './Header.style.css';
import { Link } from 'react-router-dom';
class HeaderComponent extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
          <a className="navbar-brand" href="#">
            <img
              src="https://www.bulletvpn.com/wp-content/uploads/2019/12/US-Amazon-Prime-Video.png"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default HeaderComponent;
