import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './assets/App.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='footer'>
          <p id="contactInfo">matthewgonzer@gmail.com</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
