// import React from "react"
const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;
class Toolbar extends React.Component {
  // Could make this dynamic but probably not worth
  render() {
    return (
      <Router>
        <div className="container-fluid">
        <div className="row">
        <div className="col-sm">
          <Link to="/home">
            <img id="banner-logo" src="./img/logo_white.png"></img>
          </Link>
        </div>

        <div className="col-sm">
          <div className="toolbar-links">
            <Link to="/about">ABOUT</Link>
            <Link to="/ministries">MINISTRIES</Link>
            <Link to="/events">EVENTS</Link>
            <Link to="/sermons">SERMONS</Link>
            <Link to="/visit">VISIT</Link>
          </div>
        </div>
        </div>
        </div>
      </Router>
    );
  }
}

// export default Toolbar;
ReactDOM.render(
  <Toolbar/>,
  document.getElementById('toolbar-container')
);