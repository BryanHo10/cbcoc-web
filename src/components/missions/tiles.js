import React from "react"
import {withPrefix, Link} from "gatsby"

//  PROPS: DATE | MEETING_TIME | LOCATION | DESC | CONTACT ARRAY(name,email) | id | audience


//  id = lowercase with "_" and replacing whitespace and "/" (i.e. middle_high_school)

class MissionTile extends React.Component{
    render(){
        return(
            <div className="col-md-6 text-center">
                <img id="group-img-card" alt="" src={withPrefix("img/"+this.props.id)+".jpg"}></img>
                <Link to={'/mission-show?id='+this.props.name}
                    state={{
                        missionId:this.props.id,
                        missionName:this.props.name,
                        missionDesc:this.props.desc,
                        missionLoc:this.props.loc,
                        missionCost:this.props.cost,
                        missionUpcoming:this.props.upcoming,
                        missionContact:this.props.contact,
                        missionDate:this.props.date,
                        missionRequire:this.props.requirements                        
                        }}                
                >
                    <h3>{this.props.name}</h3>
                </Link>
            </div>
        );
    }
}

export default MissionTile;