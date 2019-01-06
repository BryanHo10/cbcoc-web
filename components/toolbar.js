// import React from "react"

class Toolbar extends React.Component {
  // Could make this dynamic but probably not worth
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
      <div className="col-sm">
	      <a href="home.html">
	    	  <img id="banner-logo" src="./img/logo_white.png"></img>
      	</a>
      </div>

      <div className="col-sm">
        <div className="toolbar-links">
          <a href="about.html">ABOUT</a>
          <a href="ministries.html">MINISTRIES</a>
          <a href="events.html">EVENTS</a>
          <a href="sermons.html">SERMONS</a>
          <a href="visit.html">VISIT</a>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

// export default Toolbar;
ReactDOM.render(
  <Toolbar/>,
  document.getElementById('toolbar-container')
);