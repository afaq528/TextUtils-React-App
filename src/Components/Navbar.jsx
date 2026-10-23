
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        <ul className="navbar-nav me-auto d-flex flex-row">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.About}
            </Link>
          </li>
        </ul>

        <button
          className="btn btn-outline-primary"
          onClick={props.toggleMode}
        >
          {props.mode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>

      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  About: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func,
};
