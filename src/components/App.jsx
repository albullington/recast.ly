class App extends React.Component {
  constructor(props) {
    super(props);

    // searchYouTube({'q': "cat videos", 'maxResults': 5, 'key': window.YOUTUBE_API_KEY}, (videoData) => {
    //   this.state.allVideos.push(videoData);
    // });
    
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

  componentDidMount() {
    // var result = [];
      this.props.searchYouTube({'query': "something else", 'maxResults': 5, 'key': YOUTUBE_API_KEY}, 
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
            <div><h5><em>search</em> view goes here</h5>
            </div>          
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> 
              <VideoPlayer video={this.state.videoInPlayer}/>
            </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> 
              <VideoList handleClick = {this.handleClick.bind(this)} videos={this.state.allVideos} />
            </h5></div>
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;