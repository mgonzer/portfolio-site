import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './assets/MG.png';
import './assets/App.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="App">
          <div className="App-header">
            <ul className="list">
              <li>
                <Link className="listItem" to='/'>ABOUT</Link>
              </li>
              <li>
                <Link className="listItem" to='/portfolio'>PORTFOLIO</Link>
              </li>
              <li>
                <Link className="listItem" to='/resume'>RESUME</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
