//Jumbotron (image, title, title2, description)

// Used for :
// Welcome, CYF, Vision, CTs, CLAY, Young Family Fellowship, Friends Of Jesus
// English Adult Fellowship, Zion, Mandarin Fellowship, Statement of Faith
// Upcoming Events, Mission Trips, Tijuana, Pala, Many Farms, Honduras
// Belize, East Asia, Fellowshop Groups, Event Name, Blast, etc

class Jumbotron extends React.Component {
  //Probably should take a MainObject instead of individual props.
  render() {
    return (
      <div className="jumbo">
        <img src={"../img/" + this.props.image} id="jumbo-image"/>
        
        <h2>{this.props.title}</h2>
        <h2>{this.props.title2}</h2>
        <h3>{this.props.desc}</h3>

        {/* <div className="jumbo-buffer"></div> */}
      </div>
    );
  }
}

ReactDOM.render(
  <Jumbotron 
    image="church.png" 
    title="WELCOME" 
    title2="" 
    desc="Come for a visit this Sunday!"
  />,
  document.getElementById('jumbo-container')
);



//  CYF
        // <h2>CHRISTIAN YOUTH</h2>
       //  <h2>FELLOWSHIP</h2>
        // <h3>Junior High & High School</h3>

// WELCOME
        // <h2>WELCOME</h2>
        // <h3>Come for a visit this Sunday!</h3>