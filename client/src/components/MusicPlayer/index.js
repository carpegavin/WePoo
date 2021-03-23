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