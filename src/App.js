import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.scss';
import RightDescription from './components/RightDescription';
import LeftDescription from './components/LeftDescription';
import Carousel from './components/Carousel';



//using categories endpoint for vimeo api
const endpoint = `https://api.vimeo.com/categories/`;
const category = 'Animation';
const videosPerPage = 3;
const clientID = 'd0f1a08c012e61b0ca39298bc0492bda5345cee8';
const clientSecret = '9gl1vk7Va9ITFnBrGAs8PJhFF3fTQwBbDuzNe7sNUx8n+Qj24oHvd2AD8UQyVbI8MCV0XrrXvuch4xB1ojL+jpcHcgH2kMf+CEtukpUwau1WpFP1SiCYd8B7JwqQ2OH+';

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      videos:[],
      isLoaded: false
    }
    
  }

  componentDidMount() {
    //using axios to retrieve videos from the vimeo api
    const url = endpoint + category + '/videos?per_page=' + videosPerPage;
    axios.get(url, {
      auth: {
        username: clientID,
        password: clientSecret,
      },
    }).then(res => {
      this.setState({
        videos: res.data.data,
        isLoaded: true
      })
      console.log(this.state);
      console.log(this.state.videos[1])
    })
  }


  render() {
    return (
      <div className="App">
      
      {this.state.isLoaded && this.state.videos.length === 3 ? (
        <div class="my-container">
          <Carousel/>
          <div class="bg light-bg">
            <RightDescription key={this.state.videos[0].uri} video={this.state.videos[0]}/>
          </div>
          <div class="bg dark-bg">
            <LeftDescription key={this.state.videos[1].uri} video={this.state.videos[1]}/>
            <RightDescription key={this.state.videos[2].uri} video={this.state.videos[2]}/>
          </div>
        </div>
      ) : (
        <div></div>
      )}

        
        
        
      </div>
    );
  }
}

export default App;
