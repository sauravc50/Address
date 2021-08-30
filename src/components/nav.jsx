import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">My Brand</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/address">Addresses</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/user">Users</NavLink>
                  </li>
                </ul>
                
                  <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/register">Register</NavLink>
                  </li>
                  </ul>
                
              </div>
            </div>
          </nav>
        );
    }
}
 
export default Nav;