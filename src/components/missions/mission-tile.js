import React from "react"
import {withPrefix, Link} from "gatsby"


//  GroupTile: Lists all missions styled in a 2 column table
//              Selection will redirect the user to mission_show.js
//              Data fetched from cbcoc_mission.json
//  Routing: Links associated with each item are stored with each mission's properties
//           mission_show.js handles data

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
class MissionTile extends React.Component{
    constructor(props){
        super(props);

        this.state={
            uri:"img/"+this.props.id+".png"
        };
    }
    render(){
        return(
            <div className="col-md-6 text-center py-5">
                <img id="group-img-card" alt="" src={withPrefix(this.state.uri)} onError={()=>this.setState({uri:"img/unavailable.png"})}></img>
                
                {/* Passing Mission Information through Link to mission-show  */}
                <Link to={'/mission-show?id='+this.props.name}
                    id="underline-link"
                    state={{
                        missionId:this.props.id,
                        missionName:this.props.name,
                        missionDesc:this.props.desc,
                        missionLoc:this.props.loc,
                        missionCost:this.props.cost,
                        missionUpcoming:this.props.upcoming,
                        missionContact:this.props.contact,
                        missionDate:this.props.date,
                        missionRequire:this.props.requirements,
                        missionParticipate:this.props.participate                        
                        }}                
                >
                    <h3 className="gotham-med darkblue-tag">{this.props.name}</h3>
                </Link>
            </div>
        );
    }
}

export default MissionTile;