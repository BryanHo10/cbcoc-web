//  PROPS: DATE | TIME | LOCATION | DESC | CONTACT ARRAY(name,email)
import React from "react"
import {Link} from "gatsby"

// FellowshipItem: View of full description of fellowship group including date, time, location, contact info of leaders
//                  Data fetched from cbcoc_fellowship.json

class FellowshipItem extends React.Component {


    

    render() {
      
      return (
        <div id='fellowship-info'>
        <div className="container-fluid bg-white">
            <div className="row">
                <div id="column-info" className="col-md-3">
                    <div className="py-2">
                        <h5 className="darkblue-tag gotham-med">Meeting Times</h5>
                        <p className="serifpro">{this.props.date}<br/>{this.props.time}</p>
                    </div>
                    <div className="py-2">
                        <h5 className="darkblue-tag gotham-med">Location</h5>
                        <p className="serifpro">{this.props.loc}</p>
                    </div>
                    <div className="py-2">
                        <h5 className="darkblue-tag gotham-med">Contact</h5>
                        {
                           //Dynamically outputs formatted List of Contact information for all persons
                           this.props.contact.map((leader)=>{
                            return(<div className="py-1">
                                        <p className="serifpro">{leader.name}<br/>{leader.email}</p>
                                    </div>
                                );
                           })
                        }
                    </div>
                </div>
                <div id="column-info" className="col-md">
                    <div className="py-2">
                        <h5 className="darkblue-tag gotham-med">Description</h5>
                        <p id="desc-view" className="serifpro">{this.props.desc}</p>
                    </div>
                    <div className="py-2">
                        <Link id="backtrack-events" to="/fellowships">
                            <h6 id="attach-icon" className="gotham-med">Back to Fellowship Groups  </h6>
                            <h6 className="fa-solid" id="attach-icon"></h6>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
      );
    }
  }

export default FellowshipItem;
//   ReactDOM.render(
//     <FellowshipItem
//         date="Every Friday"
//         time="7:30 PM"
//         loc="CBCOC"
//         desc="Everyone loves fromage frais edam. Emmental cottage cheese chalk and cheese squirty cheese cheesecake cottage cheese cheese strings emmental. Monterey jack cheese on toast bavarian bergkase cheese on toast fromage frais who moved my cheese feta cow. Bocconcini pecorino fondue. Fondue cream cheese jarlsberg. Caerphilly cauliflower cheese the big cheese cheese and wine gouda blue castello edam airedale. Goat croque monsieur airedale cheesy grin red leicester babybel paneer st. agur blue cheese. Edam mozzarella."
//         contact={[
//             {
//                 name:"Matthew Yang",
//                 email:"matthewsyang@gmail.com"
//             },
//             {
//                 name:"Donna Wong",
//                 email:"dw2107@gmail.com"
//             }
//         ]}
//     />,
//     document.getElementById('fellowship-info')
//   );