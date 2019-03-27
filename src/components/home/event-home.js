import React from "react"
import {withPrefix, Link} from "gatsby"

class EventHome extends React.Component {

    render() {
      
      return (
        <div id="upcoming-container">
        <div id="event-section">
            <img id="event-image" alt="" src={withPrefix("img/" + this.props.image)}></img>

            <div id = "upcoming-info" className="container border">
              <h3 className="darkblue-tag in-front gotham-bold">Upcoming Event</h3>
              <p className="gotham-book">Come join us at this <br/>upcoming event that’s <br/>happening really soon!</p>
              <Link id="backtrack-events" to="/events">
                            <h6 id="attach-icon" className="gotham-med">View Event Details  </h6>
                            <h6 className="fa-solid" id="attach-icon"></h6>
                        </Link>
            </div>
            {/* <div id="event-buffer"></div> */}
        </div>
        </div>
      );
    }
  }
  export default EventHome;
  // ReactDOM.render(
  //   <Event_Home
  //     image="event-test.png"
  //     title="Upcoming Event"
  //     description="Come join us at this upcoming event that’s happening really soon!"
  //   />,
  //   document.getElementById('upcoming-container')
  // );