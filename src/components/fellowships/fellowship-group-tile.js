import React from "react"
import {withPrefix, Link} from "gatsby"

//  PROPS: DATE | MEETING_TIME | LOCATION | DESC | CONTACT ARRAY(name,email) | id | audience


//  id = lowercase with "_" and replacing whitespace and "/" (i.e. middle_high_school)

class GroupTile extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          uri:"img/"+this.props.id+".png"
        };
    }

    render(){
        return(
            <div className="col-md-6 text-center">
                <img id="group-img-card" alt="" src={withPrefix(this.state.uri)} onError={()=>this.setState({uri:"img/unavailable.png"})}></img>
                <Link to={'/fellowship-show?id='+this.props.target_aud}
                    state={{
                        groupId:this.props.target_aud,
                        groupName:this.props.name,
                        groupDesc:this.props.desc,
                        groupLoc:this.props.loc,
                        groupTime:this.props.times,
                        groupMeet:this.props.meetings,
                        groupContact:this.props.contact,
                        groupDate:this.props.date,
                        groupAudience:this.props.audience,
                        groupAbbrev:this.props.abbrev                           
                        }}                
                >
                    <h3>{this.props.target_aud}</h3>
                </Link>
            </div>
        );
    }
}

export default GroupTile;