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
                        <h5 className="pb-3 darkblue-tag">Upcoming Trip(s)</h5>
                        {
                           //Dynamically outputs formatted List of Upcoming Dates
                           this.props.upcoming.map((dates)=>{
                            return(
                                    <p className="my-1">{dates}</p>
                                );
                           })
                        }
                    </div>
                    <div className="py-5">
                        <h5 className="pb-3 darkblue-tag">Cost</h5>
                        <p>{this.props.cost}</p>
                    </div>
                    <div className="py-2">
                        <h5 className="pb-3 darkblue-tag">Requirements</h5>
                        {
                           //Dynamically outputs formatted List of Requirements
                           this.props.requirements.map((needs)=>{
                            return(
                                <p className="my-1">{needs}</p>
                                );
                           })
                        }
                    </div>
                    <div className="py-5">
                        <h5 className="pb-3 darkblue-tag">Contact</h5>
                        {
                           //Dynamically outputs formatted List of Contact information for all persons
                           this.props.contact.map((leader)=>{
                            console.log(this.props);
                            return(<div className="py-1">
                                        <p>{leader.name}<br/>{leader.email}</p>
                                    </div>
                                );
                           })
                        }
                    </div>
                </div>
                <div id="column-info" className="col-md">
                    <div className="py-2">
                        <h5 className="pb-3 darkblue-tag">Description</h5>
                        <p id="desc-view" className="py-3">{this.props.desc}</p>
                    </div>
                    <div className="py-2">
                        <h5 className="pb-3 darkblue-tag">How you can be involved</h5>
                        {
                           //Dynamically outputs formatted List of Participations
                           Object.keys(this.props.participate).map((action)=>{
                            return(<div className="py-1">
                                        <h6 className="darkblue-tag">{action}:</h6>
                                        <p id="desc-view">{this.props.participate[action]}</p>
                                    </div>
                                );
                           })
                        }
                    </div>
                    
                    <div className="py-5">
                        <Link id="backtrack-events" to="/missions">
                            <h6 id="attach-icon">Back to Mission Trips  </h6>
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
//   ReactDOM.render(
//     <MissionItem
//         date="Every Friday"
//         time="7:30 PM"
//         loc="CBCOC"
//         desc="Everyone loves fromage frais edam. Emmental cottage cheese chalk and cheese squirty cheese cheesecake cottage cheese cheese strings emmental. Monterey jack cheese on toast bavarian bergkase cheese on toast fromage frais who moved my cheese feta cow. Bocconcini pecorino fondue. Fondue cream cheese jarlsberg. Caerphilly cauliflower cheese the big cheese cheese and wine gouda blue castello edam airedale. Goat croque monsieur airedale cheesy grin red leicester babybel paneer st. agur blue cheese. Edam mozzarella."
//         contact={[
//             {
//                 name:"Matthew Yang",
//                 email:"matthewsyang@gmail.com"
//             },
//             {
//                 name:"Donna Wong",
//                 email:"dw2107@gmail.com"
//             }
//         ]}
//     />,
//     document.getElementById('fellowship-info')
//   );