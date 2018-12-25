import React from 'react';
import RightDescription from './RightDescription';
import './Descriptions.scss';

//a description/video where the video image is on the left
class LeftDescription extends RightDescription {
  render() {
    return (
      <div className="leftDescription videoItem">
          
          <a className="vidPic"  href={this.video.link} target="_blank" rel="noopener noreferrer">
            <img src={this.video.pictures.sizes[4].link} alt={this.video.name}/>
          </a>
          <div className="vidInfo">
          <div className="infoBox">
              <div className="vidTitle">
                <h2> {this.video.name}</h2>
              </div>
              <div className="vidDesc">
                <p>{this.shortenDescription(this.video.description)}</p>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default LeftDescription;
