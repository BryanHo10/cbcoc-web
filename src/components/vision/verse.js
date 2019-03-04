import React from "react"

class VerseContainer extends React.Component {
    render(){
        return(
            <div id="verse-container" className="container-fluid text-center py-5">
                <div>
                    <h1 className="fa-solid lightblue-tag"></h1>
                </div>
                <div className="darkblue-tag">
                    <h1 className="py-3">And he said to all, “If anyone would come 
                        <br/>after me, let him deny himself and take up 
                        <br/>his cross daily and follow me.
                    </h1>
                    <h5>Luke 9:23(ESV)</h5>
                </div>
            </div>

        );
    }
}
export default VerseContainer;