    // missionId:this.props.id,
    // missionName:this.props.name,
    // missionDesc:this.props.desc,
    // missionLoc:this.props.loc,
    // missionCost:this.props.cost,
    // missionUpcoming:this.props.upcoming,
    // missionContact:this.props.contact,
    // missionDate:this.props.date,
    // missionRequire:this.props.requirements 

import React from "react"
import {Link} from "gatsby"
class MissionItem extends React.Component {


    

    render() {
      console.log(this.props);
      return (
        <div id='fellowship-info'>
        <div className="container-fluid bg-white">
            <div className="row">
                <div id="column-info" className="col-md-3">
                    <div className="py-2">
                        <h5 className="pb-3 darkblue-tag gotham-med">Upcoming Trip(s)</h5>
                        {
                           //Dynamically outputs formatted List of Upcoming Dates
                           this.props.upcoming &&
                           this.props.upcoming.map((dates)=>{
                            return(
                                    <p className="serifpro my-1">{dates}</p>
                                );
                           })
                        }
                    </div>
                    <div className="py-5">
                        <h5 className="pb-3 darkblue-tag gotham-med">Cost</h5>
                        <p className="serifpro">{this.props.cost}</p>
                    </div>
                    <div className="py-2">
                        <h5 className="pb-3 darkblue-tag gotham-med">Requirements</h5>
                        {
                           //Dynamically outputs formatted List of Requirements
                           this.props.requirements &&
                           this.props.requirements.map((needs)=>{
                            return(
                                <p className="serifpro my-1">{needs}</p>
                                );
                           })
                        }
                    </div>
                    <div className="py-5">
                        <h5 className="pb-3 darkblue-tag gotham-med">Contact</h5>
                        {
                           //Dynamically outputs formatted List of Contact information for all persons
                           this.props.contact &&
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
                <div id="column-info" className="col-md">
                    <div className="py-2">
                        <h5 className="pb-3 darkblue-tag gotham-med">Description</h5>
                        <p id="desc-view" className="pb-3">{this.props.desc}</p>
                    </div>
                    <div className="py-2">
                        <h5 className="pb-3 darkblue-tag gotham-med">How you can be involved</h5>
                        {
                           //Dynamically outputs formatted List of Participations
                           this.props.participate &&
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
