//Display a small snippet of Event
//Compiled of 3 previews per page

// PROPS: NAME | DATE | LOC | DESC | IMG_LOC | id
class Event_Preview extends React.Component {

    render() {
      
      return (
        <Router>
            <div className="row border-bottom border-secondary">
                <div className="col-md-6 text-center py-5">
                    <img className="event-img-card" src={"../img/bible.png"}/>
                </div>
                <div className="col-md-6 py-5">
                    <h5>{this.props.name}</h5>
                    <p>{this.props.date}<br/>{this.props.loc}</p>
                    <p id="short-desc">{this.props.desc}</p>
                    <Link id="backtrack-events" to="/events">
                            <h6 id="attach-icon">Back to Events  </h6>
                            <h6 className="fa-solid" id="attach-icon"></h6>
                    </Link>
                </div>

            </div>
        </Router>
      );
    }
  }
  
  ReactDOM.render(
    <div>
        <Event_Preview
            name="Event Name"
            date="December 8-9, 2018"
            loc="CBCOC"
            desc="Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte."
        />
        <Event_Preview
            name="Event Name"
            date="December 8-9, 2018"
            loc="CBCOC"
            desc="Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte."
        />
        <Event_Preview
            name="Event Name"
            date="December 8-9, 2018"
            loc="CBCOC"
            desc="Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte."
        />
    </div>,
    document.getElementById('event-preview')
  );