import React from "react"
import {withPrefix, Link} from "gatsby"

// PROPS: name | id

//  id = lowercase with "_" and replacing whitespace and "/" (i.e. middle_high_school)

class Group_Tile extends React.Component{
    render(){
        return(
            <div className="col-md-6 text-center">
                <img id="group-img-card" src={withPrefix("img/"+this.props.id)+".jpg"}></img>
                <h3>{this.props.name}</h3>
            </div>
        );
    }
}

export default Group_Tile;