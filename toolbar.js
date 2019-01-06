class Toolbar extends React.Component {
  render() {
    return (
      <div>
	    <a href="">
	    	<img src="./img/logo_white.png"></img>
      	</a>

        <a href="">ABOUT</a>
        <a href="">ABOUT</a>
        <a href="">ABOUT</a>
        <a href="">ABOUT</a>
        <a href="">ABOUT</a>
      </div>
    );
  }
}

ReactDOM.render(
  <Toolbar/>,
  document.getElementById('toolbar-container')
);