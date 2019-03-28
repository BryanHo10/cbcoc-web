import React from "react"
import {withPrefix} from "gatsby"

class ParkingView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img_id:"img/parking_highlight.png"
        };
    }
    render(){
        let imgStyling={border:0, width:"60%", "paddingBottom":"70px"};
        return(
            <div className="text-center container-fluid py-3">
                <h1 className="darkblue-tag text-center container-fluid pb-4 gotham-med">Parking</h1>
                <img alt="" src={withPrefix(this.state.img_id)} style={imgStyling}/>

                <div className="row px-5" id="parking-loc">
                    <div className="col-md-6 px-5">
                        <div>
                            <h4 className="darkblue-tag pb-4 gotham-med">Main Lot</h4>
                            <p className="darkblue-tag serifpro">Our main parking lot is accessible from Olive St. Let one of our parking volunteer staff know as we have spaces reserved for you so you can enjoy spending time worshiping God with our church family.</p>
                        </div>
                    </div>
                    <div className="col-md-6 px-5">
                        <div>
                            <h4 className="darkblue-tag pb-4 gotham-med">Tech Center Lot</h4>
                            <p className="darkblue-tag serifpro">The tech center lot can be accessed from Melrose St. The lot is open on Sundays when the main lot is near full capacity. We ask as a courtesy to the volunteer staff that guests parked in the tech center lot move their cars from this lot before 1:00 pm.</p>
                        </div>
                    </div>

                </div>
                <div className="row px-5 py-5" id="parking-loc">
                    <div className="col-md-6 px-5">
                        <div>
                            <h4 className="darkblue-tag pb-4 gotham-med">Center St. Public Lot</h4>
                            <p className="darkblue-tag serifpro">There is a public lot accessible from Center St. just west of Olive St. Please park on the side closest to Olive Street to keep the spaces near the Community Center available for their events. Note that some spaces require you to move your car by 3:00 pm.</p>
                        </div>
                    </div>
                    <div className="col-md-6 px-5">
                        <div>
                            <h4 className="darkblue-tag pb-4 gotham-med">Street Parking</h4>
                            <p className="darkblue-tag serifpro">There is limited street parking around the church. We ask that you park in designated curbs as some areas do not allow street parking. Also as a courtesy to our neighbors, we ask that you move your vehicle to the main lot after the second hour of worship and Bible study.</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default ParkingView;