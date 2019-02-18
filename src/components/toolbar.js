import React from "react"
import {withPrefix, Link} from "gatsby"

// PROPS: isSolid(true/false)
//  isSolid
//      > true:   img(logo_blue.png)  | bg-color(--darkblue)
//      > false:  img(logo_white.png) | bg-color(none)


class Toolbar extends React.Component {
  // Could make this dynamic but probably not worth

  render() {
    let logo="logo_white.png";
    let bg_color={};

    if(this.props.isSolid){
      logo="logo_blue.png";
      bg_color = {
        backgroundColor: '#051C34',
      };
    }

    return (
      <div id="toolbar-container" style={bg_color}>
        <div className="container-fluid">
        <div className="row">
        <div className="col-sm">
          <Link to="/">
            <img id="banner-logo" src={withPrefix("img/"+logo)}></img>
          </Link>
        </div>

        <div className="col-sm">
          <div className="toolbar-links">
            <Link to="/leadership">ABOUT</Link>
            <Link to="/ministries">MINISTRIES</Link>
            <Link to="/events">EVENTS</Link>
            <Link to="/sermons">SERMONS</Link>
            <Link to="/visit">VISIT</Link>
          </div>
        </div>
        </div>
        </div>
        </div>

    );
  }
}

export default Toolbar;
// ReactDOM.render(
//   <Toolbar/>,
//   document.getElementById('toolbar-container')
// );