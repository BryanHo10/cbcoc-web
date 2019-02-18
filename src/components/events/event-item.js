//  PROPS: DATE | TIME | LOC | DESC | NAME | id

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
        desc="Everyone loves fromage frais edam. Emmental cottage cheese chalk and cheese squirty cheese cheesecake cottage cheese cheese strings emmental. Monterey jack cheese on toast bavarian bergkase cheese on toast fromage frais who moved my cheese feta cow. Bocconcini pecorino fondue. Fondue cream cheese jarlsberg. Caerphilly cauliflower cheese the big cheese cheese and wine gouda blue castello edam airedale. Goat croque monsieur airedale cheesy grin red leicester babybel paneer st. agur blue cheese. Edam mozzarella."
        id={1}
    />,
    document.getElementById('event-info')
  );