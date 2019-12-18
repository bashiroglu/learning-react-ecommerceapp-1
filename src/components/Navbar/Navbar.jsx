import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}

        <Link  to="/" >{/* we define the route here */}
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
      </nav>
    );
  }
}

export default Navbar;
