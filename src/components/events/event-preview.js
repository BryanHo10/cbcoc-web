import React from "react"
import {withPrefix, Link} from "gatsby"

// PROPS: NAME | DATE | LOC | DESC | img | id

// EventPreview: View of small snippets of a number of events (Default: 3 events)
//               Selection of Item will redirect user to event-show.js

class EventPreview extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uri:"img/"+this.props.id+".png"
        };
    }
    render() {
      
      return (
        <div id="event-preview" className="container-fluid">
            <div className="row">
                <div className="col-md-6 text-center py-5">
                    <img className="event-img-card" alt="" src={withPrefix(this.state.uri)} onError={()=>this.setState({uri:"img/unavailable.png"})} />

                </div>
                <div className="col-md-6 py-5">
                    <h5 className="gotham-med">{this.props.name}</h5>
                    <p className="gotham-book color-gray">{this.props.date}<br/>{this.props.loc}</p>
                    <p className="serifpro" id="short-desc">{this.props.desc}</p>
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
                            <h6 className="gotham-med" id="attach-icon">View Event Details  </h6>
                            <h6 className="fa-solid" id="attach-icon"></h6>
                    </Link>
                </div>

            </div>
        </div>
      );
    }
  }
  
 export default EventPreview;