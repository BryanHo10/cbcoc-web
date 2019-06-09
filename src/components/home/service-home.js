import React from "react"

// Displays all services and the times of their service

class ServiceHome extends React.Component {

  render() {
    
    return (
      <div id="services-container">
          <div id="service-title" className="container-fluid">
            <h3 className="darkblue-tag text-center gotham-bold">Sunday Service Times</h3>
          </div>
          <div>
            <div id="service-info" className="row">
              <div className="col-sm text-center ">
                <h5 className="lightblue-tag gotham-med">English Service</h5>
                <p className="gotham-book">9:15 - 10:30 AM<br/>Fellowship Hall</p>
              </div>
              <div id="service-center" className="col-sm text-center">
                <h5 className="lightblue-tag gotham-med">Mandarin Service</h5>
                <p className="gotham-book">9:15 - 10:30 AM<br/>Sanctuary</p>
              </div>
              <div className="col-sm text-center ">
                <h5 className="lightblue-tag gotham-med">Bilingual Service</h5>
                <p className="gotham-book">10:45 AM - 12:00 PM<br/>Sanctuary</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default ServiceHome;