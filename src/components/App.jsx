class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      allVideos: exampleVideoData,
      videoInPlayer: exampleVideoData[0]
    }
  }
  
  handleClick(event){
    this.setState(
      { videoInPlayer: event }
    )
  }
  
  search(event) {
    this.props.searchYouTube({'query': event, 'maxResults': 5, 'key': YOUTUBE_API_KEY}, 
        (videoData) => {
          var result = videoData.items ;
      this.setState({
        allVideos: result,
        videoInPlayer : result[0] 
      })
    });
  }

  componentDidMount() {
      this.props.searchYouTube({'query': "cats", 'maxResults': 5, 'key': YOUTUBE_API_KEY}, 
        (videoData) => {
          var result = videoData.items ;
      this.setState({
        allVideos: result,
        videoInPlayer : result[0] 
      })
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3"> 
          <Search search = {this.search.bind(this)} />       
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoInPlayer}/>
          </div>
          <div className="col-md-5">
            <VideoList handleClick = {this.handleClick.bind(this)} videos={this.state.allVideos} />
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;