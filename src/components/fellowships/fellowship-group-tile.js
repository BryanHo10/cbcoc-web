import React from "react"
import {withPrefix, Link} from "gatsby"

// PROPS: name | id 

class Group_Tile extends React.Component{
    render(){
        return(

            <div className="col-md-6 text-center">
                <img id="group-img-card" src={withPrefix("img/"+this.props.id)+".jpg"}></img>
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default Group_Tile;