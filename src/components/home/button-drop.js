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
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle size="lg">
                {this.props.header}
              </DropdownToggle>
              <DropdownMenu>
                  {
                      this.props.menuItems.map((navItem)=>{
                          return(
                              <DropdownItem>{navItem}</DropdownItem>
                          );
                      })
                  }
              </DropdownMenu>
            </ButtonDropdown>
        );
    }
}

export default MenuDrop;