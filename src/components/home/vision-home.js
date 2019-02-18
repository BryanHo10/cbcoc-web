import React from "react"


class Vision_Home extends React.Component {

    render() {
      
      return (
        <div id="vision-container">
        <div className="container-fluid text-center py-5">
            <h1>We are a gospel-centered church <br/>that exists to glorify God<br/>through worship, missions, and community</h1>
            <h1 className="fa-solid lightblue-tag"></h1>
        </div>
        </div>
      );
    }
  }
  
  export default Vision_Home;
  // ReactDOM.render(
  //   <Vision_Home/>,
  //   document.getElementById('vision-container')
  // );