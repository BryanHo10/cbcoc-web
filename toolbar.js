class Toolbar extends React.Component {
  render() {
    return (
      <div class="container-fluid">
      <div class="row">
      <div class="col-sm">
	      <a href="./home.html">
	    	  <img id="banner-logo" src="./img/logo_white.png"></img>
      	</a>
      </div>
      <div class="col-sm">
        <div class="toolbar-links">
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