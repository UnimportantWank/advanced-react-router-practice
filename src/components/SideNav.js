import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li className="active">
          <Link to="/">
            <i className="fa fa-fw fa-dashboard" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/charts">
            <i className="fa fa-fw fa-bar-chart-o" />
            Charts
          </Link>
        </li>
        <li>
          <Link to="/tables">
            <i className="fa fa-fw fa-table" />
            Tables
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <i className="fa fa-fw fa-cog" />
            Settings
          </Link>
        </li>
        <li>
          <Link to="/wall">
            <i className="fa fa-fw fa-twitter" />
            Wall
          </Link>
        </li>
        <li>
          <Link to="/profiles">
            <i className="fa fa-fw fa-user" />
            Profiles
          </Link>
        </li>
        <li>
          <Link to="/marquee/iloveroutes">
            <i className="fa fa-fw fa-pencil" />
            I love routes
          </Link>
        </li>
        <li>
          <Link to="/marquee/reactrouterrules">
            <i className="fa fa-fw fa-instagram" />
            React router rules
          </Link>
        </li>
      </ul>
    </div>);
}

export default SideNav;
