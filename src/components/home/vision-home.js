import React from "react"

// Displays Vision statement w/ font-style and color attached

class VisionHome extends React.Component {

    render() {
      
      return (
        <div id="vision-container">
        <div className="container-fluid text-center py-5">
            <h1 className="gothic-med">We are a gospel-centered church <br/>that exists to glorify God<br/>through worship, missions, and community</h1>
            <h1 className="fa-solid lightblue-tag"></h1>
        </div>
        </div>
      );
    }
  }
  
  export default VisionHome;