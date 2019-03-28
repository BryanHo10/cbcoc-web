import React from "react"

// PROPS: mainTitle | oneTitle | oneTime | oneLoc | twoTitle | twoTime | twoLoc | threeTitle | threeTime | threeLoc 

class TriFoldService extends React.Component {

  render() {
    return (
      <div id="service-container">
          <div className="container-fluid pb-5">
            <h1 className="darkblue-tag text-center gotham-med">&zwnj;{this.props.mainTitle}&zwnj;</h1>
          </div>
          <div className="py-3">
            <div id="tri-info" className="row">
              <div className="col-sm text-center ">
                <h4 className="darkblue-tag gotham-med">{this.props.oneTitle}</h4>
                <p className="gotham-book">{this.props.oneTime}<br/>{this.props.oneLoc}</p>
              </div>
              <div className="col-sm text-center">
                <h4 className="darkblue-tag gotham-med">{this.props.twoTitle}</h4>
                <p className="gotham-book">{this.props.twoTime}<br/>{this.props.twoLoc}</p>
              </div>
              <div className="col-sm text-center ">
                <h4 className="darkblue-tag gotham-med">{this.props.threeTitle}</h4>
                <p className="gotham-book">{this.props.threeTime}<br/>{this.props.threeLoc}</p>
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