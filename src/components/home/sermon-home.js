class Sermon_Home extends React.Component {

    render() {
      
      return (
        <Router>
        <div className="container-fluid">
          <div className="row">
              
            <div id="latest-info" className="col-sm">
              <h3 className="darkblue-tag">{this.props.title}</h3>
              <p>{this.props.passage}</p>
              <p>{this.props.speaker}</p>

              <Link to="/sermons" id="latest-button" className="btn border">Listen Now</Link>
            </div>
            <div className="col-sm border">
            <img id="bible-img"src="../../img/bible.png" ></img>
            </div>
          </div>
        </div>
        </Router>
      );
    }
  }
  
  ReactDOM.render(
    <Sermon_Home
      title="Latest Sermon"
      passage="Hear the most recent sermon or catch up on those from prior months"
      speaker="Jamie Kwok"
    />,
    document.getElementById('latest-container')
  );