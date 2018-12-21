import React from 'react';
import RightDescription from './RightDescription';
import './Descriptions.scss';


class LeftDescription extends RightDescription {
  render() {
    return (
      <div className="leftDescription videoItem">
          
          <a className="vidPic"  href={this.video.link} target="_blank" rel="noopener noreferrer">
            <img src={this.video.pictures.sizes[4].link} alt={this.video.name}/>
          </a>
          <div className="vidInfo">
          <div class="infoBox">
              <div class="vidTitle">
                <h2> {this.video.name}</h2>
              </div>
              <div class="vidDesc">
                <p>{this.shortenDescription(this.video.description)}</p>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default LeftDescription;
