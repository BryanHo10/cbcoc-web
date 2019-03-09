import React from "react"
import {withPrefix, Link} from "gatsby"
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


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
                                    fromIndex:0,
                                    toIndex:15,
                                    direction:1
                                }}
                              >
                              <DropdownItem className="py-2">{navItem}</DropdownItem>
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