import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import "./style.css";

export class ResponsivePlayer extends Component {
  render() {
    return (
      <div className="player-wrapper">
      <h1>Test Test</h1>  
      <ReactPlayer
          className="react-player"
          url="https://music.youtube.com/playlist?list=PLeVSaoDO5bjYYxdHtKhBSpK9RvjMKWAWy"
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}



export default ResponsivePlayer;










//--------------------------non-responsive below--------------------------
//   function App() {
//     return (
//       <div>
//         <h3>Audio player in React - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>
//         <ReactPlayer
//           url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
//           width="400px"
//           height="50px"
//           playing={false}
//           controls={true}
//         />
//       </div>
//     );
//   }

//   export default App;
