import React from "react"
import {withPrefix, Link} from "gatsby"

//Display a small snippet of Event
//Compiled of 3 previews per page

// PROPS: NAME | DATE | LOC | DESC | id
class Event_Preview extends React.Component {

    render() {
      
      return (
        <div id="event-preview">
            <div className="row border-bottom border-secondary">
                <div className="col-md-6 text-center py-5">
                    <img className="event-img-card" src={withPrefix("img/"+this.props.id+".png")}/>
                </div>
                <div className="col-md-6 py-5">
                    <h5>{this.props.name}</h5>
                    <p>{this.props.date}<br/>{this.props.loc}</p>
                    <p id="short-desc">{this.props.desc}</p>
                    <Link id="backtrack-events" to="/events">
                            <h6 id="attach-icon">Back to Events  </h6>
                            <h6 className="fa-solid" id="attach-icon"></h6>
                    </Link>
                </div>

            </div>
        </div>
      );
    }
  }
  
 export default Event_Preview;