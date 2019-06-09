import React from "react"
import {Link} from "gatsby"
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// MenuDrop: Handles dropdown menus for toolbar 
//           Implemented code from reactstrap.github.io 
// Props: header: (string) | menuItems: (List<string>)

class MenuDrop extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    render(){
        return(
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} id="drop-toggle">
              <DropdownToggle size="lg" id="drop-toggle">
                {this.props.header}
              </DropdownToggle>
              {/* Passed from Toolbar.js */}
              <DropdownMenu id="drop-menu">
                  {
                      Object.keys(this.props.menuItems).map((navItem)=>{
                          return(
                            <Link to={this.props.menuItems[navItem]}
                                  state={{
                                    // Currently, only Sermon page accesses state variable
                                    // Easier to set all of them instead of checking name parameter
                                    currentPage:1
                                }}
                              >
                              <DropdownItem className="py-2" id="drop-menu-item">{navItem}</DropdownItem>
                            </Link>
                          );
                      })
                  }
              </DropdownMenu>
            </ButtonDropdown>
        );
    }
}

export default MenuDrop;