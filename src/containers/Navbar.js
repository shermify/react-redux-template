import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-primary">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Link to="/" className="navbar-brand">React-Redux Template</Link>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/example">Example Page</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
