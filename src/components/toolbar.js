import React from "react"
import {withPrefix, Link} from "gatsby"

class Toolbar extends React.Component {
  // Could make this dynamic but probably not worth
  render() {
    return (
      <div id="toolbar-container">
        <div className="container-fluid">
        <div className="row">
        <div className="col-sm">
          <Link to="/">
            <img id="banner-logo" src={withPrefix("img/logo_white.png")}></img>
          </Link>
        </div>

        <div className="col-sm">
          <div className="toolbar-links">
            <Link to="/leadership">ABOUT</Link>
            <Link to="/ministries">MINISTRIES</Link>
            <Link to="/events">EVENTS</Link>
            <Link to="/sermons">SERMONS</Link>
            <Link to="/visit">VISIT</Link>
          </div>
        </div>
        </div>
        </div>
        </div>

    );
  }
}

export default Toolbar;
// ReactDOM.render(
//   <Toolbar/>,
//   document.getElementById('toolbar-container')
// );