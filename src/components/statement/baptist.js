import React from "react"
import statementFaith from "../../data/baptist_faith_message"

class BaptistFaithMessage extends React.Component{
    render(){
        return(
            <div>
                {
                    Object.keys(statementFaith).map((topic)=>{
                        return(
                            <div>
                                <h1>{topic}</h1>
                                {
                                    statementFaith[topic].map((subsections)=>{
                                        return(
                                            <p>{subsections}</p>
                                        );
                                    })
                                }
                                <p></p>
                            </div>
                        );

                    })
                }
            </div>
        );
    }
} 
export default BaptistFaithMessage;