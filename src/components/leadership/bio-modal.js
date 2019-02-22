import React from "react"
import {withPrefix} from "gatsby"

class Leader_Card extends React.Component {

    constructor() {
        super();
        this.state = {
          count: 0,
          staff_list: []
        };
    }
    

    // PROPS: name | id | desc | title

    render() {
      
      return (
        <div className="col-md-4">
                {/* <!-- Trigger the modal with a clickable card of leader's picture and name --> */}
                <div className="container text-center border" data-toggle="modal" data-target={"#"+this.props.id}>
                    <img className="leader-img-card" src={withPrefix("img/leadership/" + this.props.id+".jpg")} alt=""/>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.title}</p>
                </div>

                {/* <!-- Modal --> */}
            <div id={this.props.id} className="modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered">

                {/* <!-- Modal content--> */}
                    <div className="modal-content">
                        <div className="modal-header">
                        <h4 className="modal-title">{this.props.name}</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            
                        </div>

                        {/* Leader's Bio */}
                        <div className="modal-body">
                            <p>{this.props.desc}</p>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      );
    }
  }



  

  export default Leader_Card;

//   ReactDOM.render(
//       <div id="leader-info" className="row">

//         {/* Pushing each item in the list of leaders || staff: Person object */}
//         {staffList.map((staff)=>{
//             return (
//                 <Leader_Card
//                     name={staff.name}
//                     title={staff.position}
//                     id={staff.image_id}
//                     desc={staff.description}
//                     index={staff.id}            
//                 />


//             );
//         } )}
        
//     </div>,
//     document.getElementById('leader-info')
//   );