import React from "react"
import {Link} from "gatsby"

// View of full description of particular event including date, time, location, contact info of leaders
// Todo: Need to set up database for events

/* Props:   id: (string)                            mission name simplified (lowercase and replace spaces with '_')
            name: (string)                          mission name to display
            loc:(string)                            mission filed/location
            desc:(string)                           about the mission
            cost:(string)                           financial cost
            upcoming:(List<string>)                 upcoming date(s) of the mission
            contact: (List<Object(name,email)>)     list of people responsible
            requirements: (List<string>)            list of requirements

            participate:(List<Object("Through Prayer","Join a Mission Team","Donations")>)             Descriptions of how you can help

*/

class MissionItem extends React.Component {

    render() {
      console.log(this.props);
      return (
        <div id='fellowship-info'>
        <div className="container-fluid bg-white">
            <div className="row">

                {/* Handles Left sidebar information (Dates/Cost/Requirements/Contact) */}
                <div id="column-info" className="col-md-3">

                    {/* Handles Upcoming dates */}
                    <div className="py-2">
                        <h5 className="pb-3 darkblue-tag gotham-med">Upcoming Trip(s)</h5>
                        {
                           //Dynamically outputs formatted List of Upcoming Dates
                           this.props.upcoming.map((dates)=>{
                            return(
                                    <p className="serifpro my-1">{dates}</p>
                                );
                           })
                        }
                    </div>

                    {/* Handles Cost */}
                    <div className="py-5">
                        <h5 className="pb-3 darkblue-tag gotham-med">Cost</h5>
                        <p className="serifpro">{this.props.cost}</p>
                    </div>

                    {/* Handles List of Requirements */}
                    <div className="py-2">
                        <h5 className="pb-3 darkblue-tag gotham-med">Requirements</h5>
                        {
                           //Dynamically outputs formatted List of Requirements
                           this.props.requirements.map((needs)=>{
                            return(
                                <p className="serifpro my-1">{needs}</p>
                                );
                           })
                        }
                    </div>

                    {/* Handles Contact Information */}
                    <div className="py-5">
                        <h5 className="pb-3 darkblue-tag gotham-med">Contact</h5>
                        {
                           //Dynamically outputs formatted List of Contact information for all persons
                           this.props.contact.map((leader)=>{
                            console.log(this.props);
                            return(<div className="py-1">
                                        <p className="serifpro">{leader.name}<br/>{leader.email}</p>
                                    </div>
                                );
                           })
                        }
                    </div>
                </div>

                {/* Handles Right Side Information (Description/Participate) */}
                <div id="column-info" className="col-md">

                    {/* Handles Description of Mission */}
                    <div className="py-2">
                        <h5 className="pb-3 darkblue-tag gotham-med">Description</h5>
                        <p id="desc-view" className="pb-3">{this.props.desc}</p>
                    </div>

                    {/* Handles List of Participation Options */}
                    <div className="py-2">
                        <h5 className="pb-3 darkblue-tag gotham-med">How you can be involved</h5>
                        {
                           //Dynamically outputs formatted List of Participations
                           Object.keys(this.props.participate).map((action)=>{
                            return(<div className="py-1">
                                        <h6 className="darkblue-tag gotham-med">{action}:</h6>
                                        <p id="desc-view">{this.props.participate[action]}</p>
                                    </div>
                                );
                           })
                        }
                    </div>
                    
                    <div className="py-5">
                        <Link id="backtrack-events" to="/missions">
                            <h6 id="attach-icon" className="gotham-med">Back to Mission Trips  </h6>
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

export default MissionItem;
