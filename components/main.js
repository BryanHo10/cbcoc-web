class Main extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div>
      	<img src="../img/church.png" id="intro-image"/>
      	<h2>{this.props.title}</h2>
      	<h3>{this.props.description}</h3>
      </div>
    );
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('intro-container')
);