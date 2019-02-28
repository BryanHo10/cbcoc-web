import React from "react"
import {Link} from "gatsby"

class Event_Navigation extends React.Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="d-flex">
                    <div className="mr-auto px-5 py-4">
                        <Link id="backtrack-events" to={"/past-events"} >
                                    <h6 className="fa-solid" id="attach-icon"></h6>
                                    <h6 id="attach-icon"> Previous Events  </h6>
                        </Link>
                    </div>
                    <div className="px-5 py-4">
                        <Link id="backtrack-events" to={"/upcoming"}>
                                    <h6 id="attach-icon">Upcoming Events  </h6>
                                    <h6 className="fa-solid" id="attach-icon"></h6>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Event_Navigation;