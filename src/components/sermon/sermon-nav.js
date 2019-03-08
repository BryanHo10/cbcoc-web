import React from "react"
import {Link} from "gatsby"

class SermonNav extends React.Component {
    render(){
        let endNewZone={display:`${this.props.hideNewer ? "none":"block"}`};
        let endOldZone={display:`${this.props.hideOlder ? "none":"block"}`};
        console.log(this.props.hideNewer,this.props.hideOlder);
        return(
            <div className="container-fluid">
                <div className="d-flex">
                    <div className="mr-auto px-5 py-4">
                        <Link   style={endOldZone}
                                id="backtrack-events" 
                                to={"/sermon-eng?fromIndex="+this.props.currentIndex+"&toIndex="+(this.props.currentIndex+this.props.intervalIndex)} 
                                state={{
                                    fromIndex:this.props.currentIndex,
                                    toIndex:(this.props.currentIndex+this.props.intervalIndex),
                                    direction:1
                                }}
                            >
                                    <h6 className="fa-solid" id="attach-icon"></h6>
                                    <h6 id="attach-icon"> Older Sermons  </h6>
                        </Link>
                    </div>
                    <div className="px-5 py-4">
                        <Link   style={endNewZone}
                                id="backtrack-events" 
                                to={"/sermon-eng?fromIndex="+(this.props.currentIndex-2*this.props.intervalIndex)+"&toIndex="+(this.props.currentIndex-this.props.intervalIndex)}
                                state={{
                                    fromIndex:(this.props.currentIndex-2*this.props.intervalIndex),
                                    toIndex:(this.props.currentIndex-this.props.intervalIndex),
                                    direction:-1
                                }}
                            >
                                    <h6 id="attach-icon">Newer Sermons  </h6>
                                    <h6 className="fa-solid" id="attach-icon"></h6>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default SermonNav;