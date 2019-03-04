import React from "react"

class ServiceHome extends React.Component {

  render() {
    
    return (
      <div id="services-container">
          <div id="service-title" className="container-fluid">
            <h3 className="darkblue-tag text-center">Sunday Service Times</h3>
          </div>
          <div>
            <div id="service-info" className="row">
              <div className="col-sm text-center ">
                <h5 className="lightblue-tag">English Service</h5>
                <p>9:15 - 10:30 AM <br/>Fellowship Hall</p>
              </div>
              <div id="service-center" className="col-sm text-center">
                <h5 className="lightblue-tag">Mandarin Service</h5>
                <p>9:15 - 10:30 AM <br/>Sanctuary</p>
              </div>
              <div className="col-sm text-center ">
                <h5 className="lightblue-tag">Bilingual Service</h5>
                <p>10:45 AM - 12:00 PM <br/>Sanctuary</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default ServiceHome;
// ReactDOM.render(
//   <Service_Home/>,
//   document.getElementById('services-container')
// );