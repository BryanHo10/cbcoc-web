import React from "react"
import {withPrefix, Link} from "gatsby"
import MenuDrop from "../components/home/button-drop"

// PROPS: isSolid(true/false)
//  isSolid
//      > true:   img(logo_blue.png)  | bg-color(--darkblue)
//      > false:  img(logo_white.png) | bg-color(none)


class Toolbar extends React.Component {
  //Taken from reactstrap "Dropdown" example
  
  render() {

    //Sets the toolbar style based on props (isSolid)
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
            <img id="banner-logo" alt="" src={withPrefix("img/"+logo)}></img>
          </Link>
        </div>

        <div className="col-sm">
          <div className="toolbar-links">

          {/* About Dropdown */}
            <MenuDrop
              header="About"
              menuItems={{"Vision":"/vision","Statement of Faith":"/statement","Leadership":"/leadership"}}
            />
          {/* Ministries Dropdown */}
            <MenuDrop
              header="Ministries"
              menuItems={{"Fellowship Groups":"/fellowships","Mission Trips":"missions"}}
            />
          {/* Events Dropdown */}
            <MenuDrop
              header="Events"
              menuItems={{"Upcoming":"/events-upcoming","Calendar":"/calendar"}}
            />
          {/* Sermons Dropdown */}
            <MenuDrop
              header="Sermons"
              menuItems={{"English":"/sermon-eng?page=1","Mandarin":"/sermon-mand?page=1","Cantonese":"/sermon-cant?page=1"}}
            />
          {/* Visit Button */}
            <Link
              to="/visit">
              <button id="visit-btn" type="button" className="btn btn-lg btn-primary">Visit</button>
            </Link>

          </div>
        </div>
        </div>
        </div>
        </div>

    );
  }
}

export default Toolbar;
