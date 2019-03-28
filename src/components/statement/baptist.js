import React from "react"
import statementFaith from "../../data/baptist_faith_message"

class BaptistFaithMessage extends React.Component{
    render(){
        return(
            <div className="container-fluid row">
                <div id="statement-main" className="col-md-9">
                {
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
                <div id="sidenav" className="col-md-2">
                    {
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