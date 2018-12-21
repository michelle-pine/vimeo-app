import React, { Component } from 'react';


class CarouselItem extends Component {
  constructor(props) {
    super(props);
    this.video = props.video; 
    this.active = props.active;
  }

  render() {
    //dynamically changing background image
    var divImage = {
      backgroundImage : "url(" + this.video.pictures.sizes[3].link + ")"
    };
    return (
      <div className={"carousel-item " + this.active}>
        <div class="info-container">
          <div class="poster">
             <img class="poster-img" src={this.video.pictures.sizes[3].link}/>
          </div>
          <div class="movie-info">

          </div>
        </div>
        <div class="carousel-item-bg" style={divImage}></div>
      </div>
    )
  }
}

export default CarouselItem;