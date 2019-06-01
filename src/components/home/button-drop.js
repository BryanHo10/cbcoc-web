import React from "react"
import {Link} from "gatsby"
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// MenuDrop: Handles dropdown menus for toolbar 
//           Implemented code from reactstrap.github.io 
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
              <DropdownMenu id="drop-menu">
                  {
                      Object.keys(this.props.menuItems).map((navItem)=>{
                          return(
                            <Link to={this.props.menuItems[navItem]}
                                  state={{
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