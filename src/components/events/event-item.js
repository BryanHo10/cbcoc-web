import React from "react"
import {Link} from "gatsby"

//  PROPS: DATE | TIME | LOC | DESC | NAME | id

//EventItem: View of the full description of event including the dates, time, location, and title
//           Event Data will be fetched from CBCOC_EVENT_DB
//           (temp) Hard-coded filler information
class EventItem extends React.Component {

    render() {
      console.log(this.props.location);
      return (
        <div id="event-info">
        <div className="container-fluid bg-white py-2">
            <div className="row">
                <div id="column-info" className="col-md-3">
                    <div className="py-2">
                        <h5 className="darkblue-tag gotham-med">{"Date & Time"}</h5>
                        <p className="serifpro">{this.props.date}<br/>{this.props.time}</p>
                    </div>
                    <div className="py-2">
                        <h5 className="darkblue-tag gotham-med">Location</h5>
                        <p className="serifpro">{this.props.loc}</p>
                    </div>
                </div>
                <div id="column-info" className="col-md-7">
                    <div className="py-2">
                        <h5 className="darkblue-tag gotham-med">Description</h5>
                        <p className="serifpro">{this.props.desc}</p>
                    </div>
                    <div className="py-2">
                        <Link id="backtrack-events" to="/events-upcoming">
                            <h6 id="attach-icon" className="gotham-med">Back to Events  </h6>
                            <h6 className="fa-solid" id="attach-icon"></h6>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
      );
    }
  }
  
 export default EventItem; 
//   ReactDOM.render(
//     <EventItem
//         date="December 31, 2018"
//         time="1:00PM"
//         loc="CBCOC"
//         desc="Everyone loves fromage frais edam. Emmental cottage cheese chalk and cheese squirty cheese cheesecake cottage cheese cheese strings emmental. Monterey jack cheese on toast bavarian bergkase cheese on toast fromage frais who moved my cheese feta cow. Bocconcini pecorino fondue. Fondue cream cheese jarlsberg. Caerphilly cauliflower cheese the big cheese cheese and wine gouda blue castello edam airedale. Goat croque monsieur airedale cheesy grin red leicester babybel paneer st. agur blue cheese. Edam mozzarella."
//         id={1}
//     />,
//     document.getElementById('event-info')
//   );