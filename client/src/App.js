import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import ReactPlayer from "react-player";

import CurrentLocation from './components/MapContainer';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
        <Marker onClick={this.onMarkerClick} name={'Current Location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBdFMldd-HkL126f2fAGsTd4irE0s0Z1wY'
})(MapContainer);

function musicApp() {
  return (
    <div>
      <h3>Audio player in React - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>
      <ReactPlayer
        url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
        width="400px"
        height="50px"
        playing={false}
        controls={true}
      />
    </div>
  );
}
 
export default musicApp;