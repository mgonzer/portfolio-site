import React, {Component} from 'react'
import ReactPDF from 'react-pdf';
import MGResume from './assets/resume.pdf'

class Resume extends Component {
  render() {
    return (
      <div>
        <h2>Resume</h2>
        <div className="resume">
        <ReactPDF file={MGResume} />
        </div>
        <br/>
        <a href="https://www.dropbox.com/s/mjl8lng93ks7ip8/MatthewGonzer-Resume.pdf?dl=1">
          <button className='resumeButton'>Download</button>
        </a>
      </div>

    )
  }
}

export default Resume
