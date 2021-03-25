import React from "react";
import MusicPlayer from "../components/MusicPlayer";
import Container from "../components/Container";

function play() {
  return (
    <div>
      <Container fluid>
        <MusicPlayer />
      </Container>
    </div>
  );
}

export default play;
