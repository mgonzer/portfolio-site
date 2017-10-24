import React, {Component} from 'react'
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import littlehelpers from './assets/little.png'
import regxpress from './assets/regxp.png'
import omw from './assets/omwp.png'
import lunaPortal from './assets/lunap.png';
import LunaPortal2 from './assets/LP.png'

class Portfolio extends Component {
  render() {
    return (
      <div className="container">
        <Zoom duration={2000}>
        <h2 className="portfolioTitle">Portfolio</h2>
        </Zoom>
        <div>
          <div className="projectBox2">
            <Zoom duration={3000}>
            <h3 className="project">LunaPortal</h3>
            </Zoom>
            <div id="infoBox">
              <Zoom duration={2000}>
              <a target="_blank" href="https://lunaportal.net"><img className="image2" src={LunaPortal2}/></a>
              </Zoom>
          <Fade bottom delay={2000} duration={1000}>
            <p id="projectInfo">
                <i>LunaPortal</i> is practice management application built for Wash Park Acupuncture,
                   an acupuncture clinic that specializes in fertility and women's health. The client needed
                   a way to communicate with patients regarding their diagnosis and treatment plan, as
                   well as a way to share resources specific to their patients health concerns.
                <br/>
                <br/>
                <b>Tech</b>: JavaScript, Node.js, express, PostgreSQL, Knex, React, Redux, Heroku, bCrypt</p>

            </Fade>
          </div>
          </div>

          <div className="projectBox">
            <Zoom duration={3000}>
            <h3 className="project">Little Helpers</h3>
            </Zoom>
            <Fade bottom delay={2000} duration={1000}>
            <p id="projectInfo">
              <i>Little Helpers</i> is a task/reward tracker app for parents and their children.
                Parents have the ability to assign a task, worth a certain point value, as well
                as a reward, worth a certain point value. When a child has completed tasks and
                accumulated points, they can redeem points for a reward.
              <br/>
              <br/>
              <b>Tech</b>: JavaScript, PostgreSQL, Knex, Node.js, express, Knex, HTML, CSS, Bootstrap</p>
            <a target="_blank" href="https://littlehelpers.world">
              <img className="image1" src={littlehelpers}></img>
            </a>
          </Fade>
          </div>
          <div className="projectBox2">
            <Zoom duration={3000}>
            <h3 className="project">RegXpress</h3>
            </Zoom>
            <Fade bottom delay={2000} duration={1000}>
            <p id="projectInfo">
              <i>RegXpress</i> is an online tournament for developers to test their knowledge of regular expressions.
              <br/>
              <br/>
              <b>Tech</b>: JavaScript, AngularJS, PostreSQL, Node.js, express, Knex,Socket.io, HTML, CSS
            </p>
            <a target="_blank" href="https://regxpress-cb9b9.firebaseapp.com/"><img className="image1" src={regxpress}/></a>
            </Fade>
        </div>
          <div className="projectBox">
            <Zoom duration={3000}>
            <h3 className="project">Outside My Window</h3>
            </Zoom>
            <Fade bottom delay={2000} duration={1000}>
            <p id="projectInfo">
              <i>Outside My Window</i> is an image based weather app that allows users to acually "see" what it looks like outside
              <br/>
              <br/>
              <b>Tech</b>: JavaScript, jQuery, AJAX, Wunderground API, HTML, CSS, Materialize
            </p>
            <a target="_blank" href="https://outside-my-window.firebaseapp.com/">
              <img className="image1" src={omw}></img>
            </a>
          </Fade>
          </div>
        </div>
      </div>

    )
  }
}

export default Portfolio
