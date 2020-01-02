import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

import styled from 'styled-components';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-primary navbar-expand-sm navbar-dark px-sm-5">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}

        <Link to="/">
          {/* we define the route here with to prop*/}
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue); /* because at the of the day, we will have 1 css file */
  
`;

export default Navbar;
