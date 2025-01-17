import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar(prop) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
        <div className="container-fluid">
          <img className="me-2 mt-1" src="https://icons.iconarchive.com/icons/treetog/file-type/256/text-icon.png" alt="icon" style={{height: "25px"}} />
          <Link className="navbar-brand " to="/">
            {prop.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
            <div className={`form-check form-switch ms-4 text-${prop.mode===`light`?`dark`:`light`}`}>
              <input className="form-check-input" type="checkbox" onClick={prop.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypesropTypes = {
  title: PropTypes.string,
}