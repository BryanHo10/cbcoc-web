import React from "react"
import {withPrefix, Link} from "gatsby"

// Sets image and content on home page
// Props: image: (string) = name of img file 

class EventHome extends React.Component {

    render() {
      
      return (
        <div id="upcoming-container">
          <div id="event-section">
              <img id="event-image" alt="" src={withPrefix("img/" + this.props.image)}></img>

              <div id = "upcoming-info" className="container border">
                <h3 className="darkblue-tag in-front gotham-bold">Upcoming Events</h3>

                {/* Should use this.props.desc but needs touching up in terms of formatting */}
                <p className="gotham-book">Come join us at this <br/>upcoming event that’s <br/>happening really soon!</p>
                <Link id="backtrack-events" to="/events-upcoming">
                    <h6 id="attach-icon" className="gotham-med">View Event Details  </h6>
                    <h6 className="fa-solid" id="attach-icon"></h6>
                </Link>
              </div>
          </div>
        </div>
      );
    }
  }
export default EventHome;
