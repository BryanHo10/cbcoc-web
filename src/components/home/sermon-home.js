import React from "react"
import {withPrefix, Link} from "gatsby"

class Sermon_Home extends React.Component {

    render() {
      
      return (
        <div className="container-fluid" id="latest-container">
          <div className="row">
              
            <div id="latest-info" className="col-sm">
              <h3 className="darkblue-tag">{this.props.title}</h3>
              <p>{this.props.passage}</p>
              <p>{this.props.speaker}</p>

              <Link to="/sermons" id="latest-button" className="btn border">Listen Now</Link>
            </div>
            <div className="col-sm border">
            <img id="bible-img" src={withPrefix("img/bible.png")} ></img>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Sermon_Home;
  // ReactDOM.render(
  //   <Sermon_Home
  //     title="Latest Sermon"
  //     passage="Hear the most recent sermon or catch up on those from prior months"
  //     speaker="Jamie Kwok"
  //   />,
  //   document.getElementById('latest-container')
  // );