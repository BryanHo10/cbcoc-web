class Toolbar extends React.Component {
  render() {
    return (
      <div>
	    <a href="">
	    	<img id="banner-logo" src="./img/logo_white.png"></img>
      	</a>
        <div class="toolbar-links border">
          <a href="">ABOUT</a>
          <a href="">ABOUT</a>
          <a href="">ABOUT</a>
          <a href="">ABOUT</a>
          <a href="">ABOUT</a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Toolbar/>,
  document.getElementById('toolbar-container')
);