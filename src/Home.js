import React, {Component} from 'react';
import {Parallax} from 'react-parallax';
import mountains from './assets/mountains.jpg';
import matt from './assets/MG3.png'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="mattGonzer">
          <h2 className="mg">Matthew Gonzer</h2>
          <h4 className="fullStack">Full-Stack Developer</h4>
          <img className="mattPhoto" src={matt}></img>
          <p className="bio">Matthew is a full stack web developer with a background in Chinese Medicine.
             He brings the same level of care and attention to detail from his time as a health
             practitioner to his work in software development. </p>
        </div>
      </div>
    )
  }
}

export default Home
