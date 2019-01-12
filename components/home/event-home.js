
class Event_Home extends React.Component {

    render() {
      
      return (
        <Router>
        <div id="event-section">
            <img id="event-image" src={"../img/" + this.props.image}></img>

            <div id = "upcoming-info" className="container border">
              <h3 className="darkblue-tag in-front">{this.props.title}</h3>
              <p>{this.props.description}</p>
              <Link to="/events" className="darkblue-tag">View Event Details</Link>
            </div>
            {/* <div id="event-buffer"></div> */}
        </div>
        </Router>
      );
    }
  }
  
  ReactDOM.render(
    <Event_Home
      image="event-test.png"
      title="Upcoming Event"
      description="Come join us at this upcoming event that’s happening really soon!"
    />,
    document.getElementById('upcoming-container')
  );