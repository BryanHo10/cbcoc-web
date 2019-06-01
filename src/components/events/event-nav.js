import React from "react"
import {Link} from "gatsby"

//EventNavigation: Allows for users to navigate to older/newer events in the Database
//                 Should identify between upcoming events and past events 
//
// Todo: Implement pagination on event's page (copy Sermon Page) 
class EventNavigation extends React.Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="d-flex">
                    <div className="mr-auto px-5 py-4">
                        <Link id="backtrack-events" to={"/events-past"} >
                                    <h6 className="fa-solid" id="attach-icon"></h6>
                                    <h6 id="attach-icon"> Previous Events  </h6>
                        </Link>
                    </div>
                    <div className="px-5 py-4">
                        <Link id="backtrack-events" to={"/events-upcoming"}>
                                    <h6 id="attach-icon">Upcoming Events  </h6>
                                    <h6 className="fa-solid" id="attach-icon"></h6>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default EventNavigation;