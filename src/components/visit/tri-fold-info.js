import React from "react"

// PROPS: mainTitle | oneTitle | oneTime | oneLoc | twoTitle | twoTime | twoLoc | threeTitle | threeTime | threeLoc 

class TriFoldService extends React.Component {

  render() {
    return (
      <div id="service-container" className="border">
          <div className="container-fluid pb-5">
            <h3 className="darkblue-tag text-center">&zwnj;{this.props.mainTitle}&zwnj;</h3>
          </div>
          <div>
            <div id="tri-info" className="row">
              <div className="col-sm text-center ">
                <h5 className="darkblue-tag">{this.props.oneTitle}</h5>
                <p>{this.props.oneTime}<br/>{this.props.oneLoc}</p>
              </div>
              <div className="col-sm text-center">
                <h5 className="darkblue-tag">{this.props.twoTitle}</h5>
                <p>{this.props.twoTime}<br/>{this.props.twoLoc}</p>
              </div>
              <div className="col-sm text-center ">
                <h5 className="darkblue-tag">{this.props.threeTitle}</h5>
                <p>{this.props.threeTime}<br/>{this.props.threeLoc}</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default TriFoldService;
// ReactDOM.render(
//   <Service_Home/>,
//   document.getElementById('services-container')
// );