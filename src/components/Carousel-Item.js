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
    var btnColor = {
      background: this.video.colors.secondary
    }
    var bgColor = {
      backgroundColor:this.video.colors.primary
    }
    return (
      <div className={"carousel-item " + this.active} style={bgColor}>
        <div class="carousel-content">
          <div class="info-container">
            <div class="poster">
              <img class="poster-img" src={this.video.pictures.sizes[3].link}/>
            </div>
            <div class="movie-info">
              <div class="movie-title">
                <h2>{this.video.name}</h2>
              </div>
              <div class="movie-desc">
                <p>{this.video.description}</p> 
              </div>
              <div class="movie-buttons">
                <button href={this.video.link} class="btn btn-watch" style={btnColor}>
                  <div class="text-together"><i class="fas fa-play-circle"></i>Buy Now </div>                                             </button>
                <button href={this.video.trailer.link} class="btn btn-outline">Watch Trailer</button>
                          
              </div>

            </div>
          </div>
        </div>
        <div class="carousel-item-bg" style={divImage}></div>
      </div>
    )
  }
}

export default CarouselItem;