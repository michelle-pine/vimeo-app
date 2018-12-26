import React, { Component } from 'react';

//represents an item on the carousel
class CarouselItem extends Component {
  constructor(props) {
    super(props);
    this.video = props.video; 
    this.active = props.active;
  }

  //renders the carousel item as a component
  render() {
    //dynamically changing background image
    var divImage = {
      backgroundImage : "url(" + this.video.pictures.sizes[3].link + ")"
    };
    var btnColor = {
      background: this.video.colors.secondary
    }
    var bgColor = {
      backgroundColor:this.video.colors.primary
    }
    return (
      <div className={"carousel-item " + this.active}>
        <div className="carousel-content">
          <div className="info-container">
            <div className="poster">
              <img className="poster-img" alt={this.video.name} src={this.video.pictures.sizes[3].link}/>
            </div>
            <div className="movie-info">
              <div className="movie-title">
                <h2>{this.video.name}</h2>
              </div>
              <div className="movie-desc">
                <p>{this.video.description}</p> 
              </div>
              <div className="movie-buttons">
                <a href={this.video.link} className="btn btn-watch" style={btnColor}>
                  <div className="text-together"><i className="fas fa-play-circle"></i>Buy Now </div>
                </a>
                <a href={this.video.trailer.link} className="btn btn-outline">Watch Trailer</a>      
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item-bg" style={divImage}></div>
        <div className="carousel-item-bg" style={bgColor}></div>
      </div>
    )
  }
}

export default CarouselItem;