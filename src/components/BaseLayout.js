import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/App.css';


class BaseLayout extends Component {
  render() {
    return (

        <div className="BaseLayoutContainer">
          <nav className="navBar">
          <NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/users/:id/:accountID">Account Detail</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/users/:id">User Detail</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/users">User List</NavLink>
          </nav>
          {this.props.children}
        </div>


    );
  }
}

export default BaseLayout;
