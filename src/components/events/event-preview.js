import React from "react"
import {withPrefix, Link} from "gatsby"

//Display a small snippet of Event
//Compiled of 3 previews per page

// PROPS: NAME | DATE | LOC | DESC | img | id
class Event_Preview extends React.Component {

    render() {
      
      return (
        <div id="event-preview" className="container-fluid">
            <div className="row">
                <div className="col-md-6 text-center py-5">
<<<<<<< HEAD
                    <img className="event-img-card" alt="" src={withPrefix("img/"+this.props.id+".png")}/>
=======
                    <img className="event-img-card" src={withPrefix("img/"+this.props.img+".png")}/>
>>>>>>> updated statement of faith page
                </div>
                <div className="col-md-6 py-5">
                    <h5>{this.props.name}</h5>
                    <p>{this.props.date}<br/>{this.props.loc}</p>
                    <p id="short-desc">{this.props.desc}</p>
                    <Link 
                        id="backtrack-events" 
                        to={"/event-show"}
                        state={{
                            eventName:this.props.name,
                            eventDesc:this.props.desc,
                            eventLoc:this.props.loc,
                            eventDate:this.props.date                            
                            }}
                    >
                            <h6 id="attach-icon">View Event Details  </h6>
                            <h6 className="fa-solid" id="attach-icon"></h6>
                    </Link>
                </div>

            </div>
        </div>
      );
    }
  }
  
 export default Event_Preview;