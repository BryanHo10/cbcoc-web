import React from "react"
import statementFaith from "../../data/baptist_faith_message"

// Dispays in webpage the Baptist Faith and Message (taken from their website)
// Constructed a json file that has the parsed information (topic/info)

// JSON-Mapping:    key:(string)            Topic (i.e. The Scriptures,God,God the Father,...)
//                  value:(List<string)     Info

class BaptistFaithMessage extends React.Component{
    render(){
        return(
            <div className="container-fluid row">

                {/* Handles the content */}
                <div id="statement-main" className="col-md-9">
                {
                    // Iterates through Topics for styling and attaching the information underneath 
                    Object.keys(statementFaith).map((topic)=>{
                        let linkID=topic.replace(/ /g,'_');
                        return(
                            <div>
                                <h1 id={linkID} className="darkblue-tag gotham-med">{topic}</h1>
                                {
                                    statementFaith[topic].map((subsections)=>{
                                        return(
                                            <p className="serifpro">{subsections}</p>
                                        );
                                    })
                                }
                            </div>
                        );

                    })
                }
                </div>

                {/* Handles Sidebar Navigation */}
                <div id="sidenav" className="col-md-2">
                    {
                        // Lists all topics
                        Object.keys(statementFaith).map((topic)=>{
                            let linkID=topic.replace(/ /g,'_');
                            return(
                                <a className="darkblue-tag gotham-bold" href={"#"+linkID} >{topic}</a>
                            );
    
                        })
                    }
                </div>
            </div>
        );
    }
} 
export default BaptistFaithMessage;