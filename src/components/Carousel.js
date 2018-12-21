import React, { Component } from 'react';
import './Carousel.scss';
import CarouselItem from './Carousel-Item';
import axios from 'axios';


const videosPerPage = 3;
const clientID = 'd0f1a08c012e61b0ca39298bc0492bda5345cee8';
const clientSecret = '9gl1vk7Va9ITFnBrGAs8PJhFF3fTQwBbDuzNe7sNUx8n+Qj24oHvd2AD8UQyVbI8MCV0XrrXvuch4xB1ojL+jpcHcgH2kMf+CEtukpUwau1WpFP1SiCYd8B7JwqQ2OH+';
const carouselEndpoint = "https://api.vimeo.com/ondemand/genres/comedy/pages?per_page=" + videosPerPage;
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos:[],
    }
  }

  componentDidMount() { 
    axios.get(carouselEndpoint, {
      auth: {
        username: clientID,
        password: clientSecret,
      },
    }).then(res => {
      this.setState({
        videos: res.data.data,

      })
      console.log(res.data.data)
      
    })
  }

  render() {
    //iterating through the ondemand items
    var elements=[];
    for(var i=0;i<this.state.videos.length;i++){
          // push the component to elements!
        var activeStr = '';
        if (i===0) {
          activeStr = 'active';
        }
        elements.push(<CarouselItem video={this.state.videos[i]} active={activeStr} key={this.state.videos[i].uri} />);
    }
    return (
      <div className="carousel">
       <div class="carousel slide" id="carouselExampleControls" data-ride="carousel">
          <div class="carousel-inner">
              {elements}
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <i class="chevron chevron-left" aria-hidden="true"></i>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <i class="chevron chevron-right" aria-hidden="true"></i>
              <span class="sr-only">Next</span>
            </a>
          </div>
      </div>
    )
  }
}

export default Carousel;