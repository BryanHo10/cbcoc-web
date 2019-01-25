//  PROPS: DATE | TIME | LOCATION | DESC | CONTACT ARRAY(name,email)

class Fellowship_Item extends React.Component {


    

    render() {
      
      return (
        <Router>
        <div className="container-fluid bg-white">
            <div className="row">
                <div id="column-info" className="col-md-3">
                    <div className="py-2">
                        <h5 className="darkblue-tag">Meeting Times</h5>
                        <p>{this.props.date}<br/>{this.props.time}</p>
                    </div>
                    <div className="py-2">
                        <h5 className="darkblue-tag">Location</h5>
                        <p>{this.props.loc}</p>
                    </div>
                    <div className="py-2">
                        <h5 className="darkblue-tag">Contact</h5>

                        {/* Dynamically outputs formatted List of Contact information for all persons */}
                        {
                            
                           this.props.contact.map((leader)=>{
                            return(<div className="py-1">
                                        <p>{leader.name}<br/>{leader.email}</p>
                                    </div>
                                );
                           })
                        }
                    </div>
                </div>
                <div id="column-info" className="col-md">
                    <div className="py-2">
                        <h5 className="darkblue-tag">Description</h5>
                        <p>{this.props.desc}</p>
                    </div>
                    <div className="py-2">
                        <Link id="backtrack-events" to="/fellowships">
                            <h6 id="attach-icon">Back to Fellowship Groups  </h6>
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
    <Fellowship_Item
        date="Every Friday"
        time="7:30 PM"
        loc="CBCOC"
        desc="Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original."
        contact={[
            {
                name:"Matthew Yang",
                email:"matthewsyang@gmail.com"
            },
            {
                name:"Donna Wong",
                email:"dw2107@gmail.com"
            }
        ]}
    />,
    document.getElementById('fellowship-info')
  );