import React, { Component } from 'react';
import './Descriptions.scss';

//a description/video where the video image is on the right
class RightDescription extends Component {
  constructor(props) {
    super(props);
    this.video = props.video;
  }

  //shortens descriptions if too long
  shortenDescription(s) {
    if (s.length > 500) {
      return s.substring(0, 500) +'...';
    }
    else {
      return s; 
    }  
  }

  //renders the description
  render() {
    return (
      <div className="rightDescription videoItem">
        <div className="vidInfo">
          <div className="infoBox">
            <div className="vidTitle">
              <h1> {this.video.name}</h1>
            </div>
            <div className="vidDesc">
              <p>{this.shortenDescription(this.video.description)}</p>
            </div>
          </div>
        </div>
        <a className="vidPic"href={this.video.link} target="_blank" rel="noopener noreferrer">
          <img  alt={this.video.name} src={this.video.pictures.sizes[4].link}/>
        </a>
        
      </div>
    )
  }
}

export default RightDescription;