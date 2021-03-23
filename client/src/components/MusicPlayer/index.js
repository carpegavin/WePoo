class ResponsivePlayer extends Component {
    render () {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=fJ9rUzIMcZQ'
            width='100%'
            height='100%'
          />
        </div>
      )
    }
  }

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