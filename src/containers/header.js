import { Navbar, Nav, MenuItem, NavDropdown, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

const navibar = () => (
    <div id="header" >
    <div className="navbar navbar-static-top">
      <div className="navbar-inner">
        <div className="container">
          <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </a>
          <a href=""><h1>.</h1></a>
          <div className="nav-collapse collapse">
            <form className="navbar-form pull-left">
              <div className="input-append">
                <input className="span3" id="appendedInputButtons" type="text"/>
                <button className="btn btn-primary" type="button"><i className="icon-search"></i></button>
              </div>
            </form>
            <ul className="nav">
              <li className="active"><a href="#">Movies</a></li>
              <li><a href="#">TV Shows</a></li>
              <li><a href="#">Music</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Features <b className="caret"></b></a>
                <ul className="dropdown-menu">
                  <li><a href="404.htm">404 Page</a></li>
                  <li><a href="page-elements.htm">Page elements</a></li>
                  <li><a href="login.htm">Login Page</a></li>
                  <li><a href="register.htm">Register Page</a></li>
                  <li><a href="pricing-plans.htm">Pricing Plans</a></li>
                </ul>
              </li>
            </ul>
         <p className="navbar-text pull-right">
            <Link to="/login" className="navbar-link">login</Link> or <Link to="/register" className="navbar-link">register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
);

export default navibar;
