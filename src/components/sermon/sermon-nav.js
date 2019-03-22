import React from "react"
import {Link} from "gatsby"

class SermonNav extends React.Component {
    render(){
        let endNewZone={display:`${this.props.hideNext ? "none":"block"}`};
        let endOldZone={display:`${this.props.hideBack ? "none":"block"}`};
        return(
            <div className="container-fluid">
                <div className="d-flex">
                    <div className="mr-auto px-5 py-4">
                        <Link   style={endOldZone}
                                id="backtrack-events" 
                                to={"/sermon-eng?page="+(this.props.currentPage-1)} 
                                state={{
                                    currentPage:this.props.currentPage-1,
                                }}
                            >
                                    <h6 className="fa-solid" id="attach-icon"></h6>
                                    <h6 id="attach-icon"> Back  </h6>
                        </Link>
                    </div>
                    <div className="px-5 py-4">
                        <Link   style={endNewZone}
                                id="backtrack-events" 
                                to={"/sermon-eng?page="+(this.props.currentPage+1)}
                                state={{
                                    currentPage:this.props.currentPage+1,
                                }}
                            >
                                    <h6 id="attach-icon">Next  </h6>
                                    <h6 className="fa-solid" id="attach-icon"></h6>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default SermonNav;