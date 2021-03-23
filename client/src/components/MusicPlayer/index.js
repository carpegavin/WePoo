function musicApp() {
    return (
      <div>
        <h3>Cover the Poo Noise - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
          width="400px"
          height="50px"
          playing={false}
          controls={true}
          loop={true}
        />
      </div>
    );
  }
   
  export default musicApp;