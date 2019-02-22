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
          <Link to="/home">
            <img id="banner-logo" src={withPrefix("img/logo_white.png")} alt=""></img>
          </Link>
        </div>

        <div className="col-sm">
          <div className="toolbar-links">
            <Link to="/welcome" state={{ page:"about" }}>ABOUT</Link>
            <Link to="/sitemap">MINISTRIES</Link>
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