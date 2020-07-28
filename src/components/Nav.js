import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";


import styled from "styled-components";

const Navigation = styled.header`
  width: 100%;
  border-bottom: 5px solid #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 80px;
  margin-bottom: 60px;
  background: #f8f8f8;

  .logo {
      border-color:white;
      border-width:10px;
      border-style:solid;
      border-radius:50%;
      
      font-size: 40px;
      background-color:black;
      color:white;
      size:20px;
      font-style: normal;
     
      font-family: 'Courier New', Courier, monospace;
    }
   
  
  .gray {
    color: #ccc;
  }
  a {
    color: #222;
    opacity: 0.55;
    transition: all 0.6s;
    color: #222;
    font-size: 1em;
  }
  a:hover {
    opacity: 1;
  }
  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
      list-style: none;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #222;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      
      
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      
      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        
      }
    }
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation>
        <div className="logol">
          <Link to="/">
            <p className="logo">SP</p>
            
          </Link>
        </div>
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <NavLink activeClassName="active" to="/">
              <li><code>home</code></li>
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              <li><code>about</code></li>
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              <li><code>contact</code></li>
            </NavLink>
          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default Nav;
