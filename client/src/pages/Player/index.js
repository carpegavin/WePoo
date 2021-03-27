import React, { Component } from "react";
import MusicPlayer from "../../components/MusicPlayer";
// import Container from "../components/Container";
import Footer from "../../components/Footer";

class Player extends Component {
  render() {
      return (
        <div>
         <MusicPlayer />
         <Footer />
        </div>
      );
    }
}
    


export default Player;
