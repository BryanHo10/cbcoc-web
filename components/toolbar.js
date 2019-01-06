class Toolbar extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
      <div className="col-sm">
	      <a href="./home.html">
	    	  <img id="banner-logo" src="./img/logo_white.png"></img>
      	</a>
      </div>
      <div className="col-sm">
        <div className="toolbar-links">
          <a href="">ABOUT</a>
          <a href="">MINISTRIES</a>
          <a href="">EVENTS</a>
          <a href="">SERMONS</a>
          <a href="">VISIT</a>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Toolbar/>,
  document.getElementById('toolbar-container')
);