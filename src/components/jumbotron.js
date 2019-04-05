//Jumbotron (image, title, title2, description)

// Used for :
// Welcome, CYF, Vision, CTs, CLAY, Young Family Fellowship, Friends Of Jesus
// English Adult Fellowship, Zion, Mandarin Fellowship, Statement of Faith
// Upcoming Events, Mission Trips, Tijuana, Pala, Many Farms, Honduras
// Belize, East Asia, Fellowshop Groups, Event Name, Blast, etc

import React from "react"
import {withPrefix} from "gatsby"

class Jumbotron extends React.Component {
  //Probably should take a MainObject instead of individual props.
  constructor(props){
    super(props);

    this.state={
      uri:"img/" + this.props.image
    };
  }
  render() {
    return (
      <div id="jumbo-container">
      <div className="jumbo">
        <img id="jumbo-image" alt="" src={withPrefix(this.state.uri)} onError={()=>this.setState({uri:"img/no-cover.png"})} />
        
        <h2 className="gotham-bold">{this.props.title}</h2>
        <h2>{this.props.title2}</h2>
        <h3 className="gotham-book">{this.props.desc}</h3>

        
      </div>
      <div className="jumbo-buffer"></div>
      </div>
    );
  }
}
export default Jumbotron;
// ReactDOM.render(
//   <Jumbotron 
//     image="church.png" 
//     title="WELCOME" 
//     title2="" 
//     desc="Come for a visit this Sunday!"
//   />,
//   document.getElementById('jumbo-container')
// );



//  CYF
        // <h2>CHRISTIAN YOUTH</h2>
       //  <h2>FELLOWSHIP</h2>
        // <h3>Junior High & High School</h3>

// WELCOME
        // <h2>WELCOME</h2>
        // <h3>Come for a visit this Sunday!</h3>