class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    
    this.state = {
      searchedValue: "cats"
    }
  }
  
  handleInput() {
    this.setState(
      {searchedValue: this.input.value}
    )
    // this.putStuff(props);
    console.log(this);
    this.props.search(this.state.searchedValue)
    // console.log('state', this.state.searchedValue)
    // console.log('new value', this.input.value)
  }
  
  putStuff(props){
    console.log(props);
  }
  
  render() {
    return (
    <div className="search-bar form-inline">
     <input className="form-control" type="text" ref = {(input) => this.input = input} />
     <button className="btn hidden-sm-down" onClick = {() => {this.handleInput()}}>
       <span className="glyphicon glyphicon-search"></span>
     </button>
   </div> 
  )}

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
