//JumbotronHome (image, title, title2, description)

// Used for :
// Welcome, CYF, Vision, CTs, CLAY, Young Family Fellowship, Friends Of Jesus
// English Adult Fellowship, Zion, Mandarin Fellowship, Statement of Faith
// Upcoming Events, Mission Trips, Tijuana, Pala, Many Farms, Honduras
// Belize, East Asia, Fellowshop Groups, Event Name, Blast, etc

import React from "react"
import {withPrefix,Link} from "gatsby"
import {Button} from "reactstrap"

class JumbotronHome extends React.Component {
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
        <div className="jumbo-home">
            <img id="jumbo-image" alt="" src={withPrefix(this.state.uri)} onError={()=>this.setState({uri:"img/no-cover.png"})} />
            
            <h2>Welcome to Chinese <br/>Baptist Church of <br/>Orange County</h2>
            <div className="py-5"> 
            <Link to="/visit">
              <Button id="jumbo-button" className="btn mr-4" >Come Visit Us</Button>
            </Link>
            <Link to="/statement">
              <Button id="jumbo-button" className="btn">See our Beliefs</Button>
            </Link>
            </div>
            {/* <div className="jumbo-buffer"></div> */}
        </div>
      </div>
    );
  }
}
export default JumbotronHome;




//  CYF
        // <h2>CHRISTIAN YOUTH</h2>
       //  <h2>FELLOWSHIP</h2>
        // <h3>Junior High & High School</h3>

// WELCOME
        // <h2>WELCOME</h2>
        // <h3>Come for a visit this Sunday!</h3>