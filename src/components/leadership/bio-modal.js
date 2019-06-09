import React from "react"
import {withPrefix} from "gatsby"
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Handles an individual church leader's tile and their information
// Reusable component (sized for 3 columns -- always)
/* Props: name: (string)
          | title: (string)     church leader's position
          | image_id: (string)        image file name
          | desc: (string)      biography of leader
          | index: (int)        order in database
*/

class LeaderCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          uri:"img/leadership/" + this.props.image_id+".jpg",
          modal:false
        };
        this.toggle = this.toggle.bind(this);
    }
    // Sets visibility of Overlay / Modal
    toggle() {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
    
    render() {
      
      return (
        <div className="col-md-4 py-5">
            {/* <!-- Clickable card of leader's picture and name (triggers modal) --> */}
            <div className="container text-center">
                <img className="leader-img-card" alt="" src={withPrefix(this.state.uri)} onError={()=>this.setState({uri:"img/leadership/no-photo.png"})} onClick={this.toggle}/>
                <h3 className="gotham-med" onClick={this.toggle}>{this.props.name}</h3>
                <p className="gotham-book" onClick={this.toggle}>{this.props.title}</p>
            </div>
            
            {/* Retrieved Modal code from Reactstrap */}
            <Modal id="leader-modal" isOpen={this.state.modal} toggle={this.toggle} size="lg">
                <ModalHeader toggle={this.toggle}/>
                <ModalBody>
                    <div className="container-fluid row">
                        <div className="col-md-6">
                            <img className="leader-img-modal" alt="" src={withPrefix(this.state.uri)} onError={()=>this.setState({uri:"img/leadership/no-photo.png"})}/>
                        </div>
                        <div className="col-md-6">
                            <h4 className="gotham-med">{this.props.name}</h4>
                            <h6 className="gotham-book">{this.props.title}</h6>
                            <br/>
                            <p id="desc-modal" className="serifpro">{this.props.desc}</p>
                        </div>
                   </div>
                </ModalBody>
                <ModalFooter/>
            </Modal>
        </div>
      );
    }
  }
export default LeaderCard;