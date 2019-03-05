import React from "react"
import {Helmet} from "react-helmet";

class ReactHelmet extends React.Component{
    render(){
        return(
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.props.tabTitle}</title>
                </Helmet>
            </div>

        );
    }
}

export default ReactHelmet;