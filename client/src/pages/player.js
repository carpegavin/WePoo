import ResponsivePlayer from "../components/MusicPlayer";
import Container from "../components/Container";
import React from "react";

function play() {
  return (
    <div>
      <Container fluid>
        <ResponsivePlayer />
      </Container>
    </div>
  );
}

export default play;
