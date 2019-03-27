import React from "react"
import {withPrefix, Link} from "gatsby"


class SermonHome extends React.Component {
    render() {

      return (
        <div className="container-fluid" id="latest-container">
          <div className="row">
              
            <div id="latest-info" className="col-sm">
              <h3 className="darkblue-tag gotham-bold">Latest Sermons</h3>
              <p className="gotham-book">Hear the most recent <br/>sermon or catch up on <br/>those from prior months</p>

              <Link to="/sermons" id="latest-button" className="btn border gotham-bold">Listen Now</Link>
            </div>
            <div className="col-sm border">
            <img id="bible-img" alt="" src={withPrefix("img/bible.png")} ></img>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default SermonHome;