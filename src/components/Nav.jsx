import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NavBar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/"
              >
                Inicio
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/about"
              >
                About
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
