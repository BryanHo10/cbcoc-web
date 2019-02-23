import React from "react"
import {Link} from "gatsby"

class Event_Navigation extends React.Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <Link id="backtrack-events" to={"/events_"} className="col-md-6">
                                <h6 className="fa-solid" id="attach-icon"></h6>
                                <h6 id="attach-icon">Previous Events  </h6>
                    </Link>
                    <Link id="backtrack-events" to={"/events_"} className="col-md-6">
                                <h6 id="attach-icon">Upcoming Events  </h6>
                                <h6 className="fa-solid" id="attach-icon"></h6>
                    </Link>
                </div>
            </div>
        );
    }
}
export default Event_Navigation;