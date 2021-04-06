import React from "react";
// import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
// import ReactPlayer from "react-player/youtube";
import Player from "./pages/Player"
import Review from "./pages/Review"
import Map from "./pages/Map"
import Home from "./pages/Home"
// import Container from "./components/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BottomNavbar from "./components/Navbar"
import Logo from "./components/Logo"
// import ReactPlayer from "react-player";
// import Play from "./pages/player"

function App() {
  return (


    <Router>
      <div>
        <Logo/>
        <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
          <Route exact path="/map">
            <Map />
          </Route>
          <Route exact path="/player">
            <Player />
          </Route>
          <Route exact path={["/review","/review/:id","/review/new/:id"]}>
            <Review />
            {/* <ReviewForm/> */}
          </Route>
 
        </Switch>
        <BottomNavbar />
      </div>
    </Router>


    // <Router>
    //   <div className="App">
    //     {/* <Container> */}
    //       <Route path='/' exact component={Home} />
    //       <Route path='/map' exact component={Map} />
    //       <Route path='/player' exact component={Player} />
    //       <Route path='/review' exact component={Review} />
    //     {/* </Container> */}
    //   </div>
    // </Router>
  );
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <Container>
//         <Play />
//       </Container>
//     );
//   }
// }
// export default App;

// import CurrentLocation from './components/MapContainer';

// export class MapContainer extends Component {
//   state = {
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {}
//   };

//   onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });

//   onClose = props => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   };

//   render() {
//     return (
//       <CurrentLocation
//         centerAroundCurrentLocation
//         google={this.props.google}
//       >
//         <Marker onClick={this.onMarkerClick} name={'Current Location'} />
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//       </CurrentLocation>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBdFMldd-HkL126f2fAGsTd4irE0s0Z1wY'
// })(MapContainer);
