//  PROPS: DATE | TIME | LOC | DESC | NAME 

class Event_Item extends React.Component {

    render() {
      console.log(this.props.location);
      return (
        <Router>
        <div className="container-fluid bg-white py-2">
            <div className="row">
                <div id="column-info" className="col-md-3">
                    <div className="py-2">
                        <h5 className="darkblue-tag">{"Date & Time"}</h5>
                        <p>{this.props.date}<br/>{this.props.time}</p>
                    </div>
                    <div className="py-2">
                        <h5 className="darkblue-tag">Location</h5>
                        <p>{this.props.loc}</p>
                    </div>
                </div>
                <div id="column-info" className="col-md-7">
                    <div className="py-2">
                        <h5 className="darkblue-tag">Description</h5>
                        <p>{this.props.desc}</p>
                    </div>
                    <div className="py-2">
                        <Link id="backtrack-events" to="/events">
                            <h6 id="attach-icon">Back to Events  </h6>
                            <h6 className="fa-solid" id="attach-icon"></h6>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
        </Router>
      );
    }
  }
  
  ReactDOM.render(
    <Event_Item
        date="December 31, 2018"
        time="1:00PM"
        loc="CBCOC"
        desc="Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original."
    />,
    document.getElementById('event-info')
  );