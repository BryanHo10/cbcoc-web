import React from "react"
import {withPrefix, Link} from "gatsby"
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
            <MenuDrop
              header="About"
              menuItems={["Vision","Statement of Faith","LeaderShip"]}
            />
            <MenuDrop
              header="Ministries"
              menuItems={["Fellowship Groups","Mission Trips"]}
            />
            <MenuDrop
              header="Events"
              menuItems={["Upcoming","Calendar"]}
            />
            <MenuDrop
              header="Sermons"
              menuItems={["English","Mandarin","Cantonese"]}
            />
            <button>Visit</button>
          </div>
        </div>
        </div>
        </div>
        </div>

    );
  }
}

export default Toolbar;
