import React from "react"

class VerseContainer extends React.Component {
    render(){
        return(
            <div id="verse-container" className="container-fluid text-center py-5">
                <div className="pt-5">
                    <h1 className="fa-solid lightblue-tag"></h1>
                </div>
                <div className="darkblue-tag gotham-book pb-5">
                    <h1 className="py-3"><b>And he said to all, “If anyone would come 
                        <br/>after me, let him deny himself and take up 
                        <br/>his cross daily and follow me.</b>
                    </h1>
                    <h5>Luke 9:23(ESV)</h5>
                </div>
            </div>

        );
    }
}
export default VerseContainer;