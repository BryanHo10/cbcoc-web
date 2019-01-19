class Timecard extends React.Component {
    // PROPS
    // date | description | image_id
    
    render(){
        return(
            <div>
                <div className="col-md-6">
                    <h1>{this.props.date}</h1>
                    <h4>{this.props.desc}</h4>
                </div>
                <div className="col-md-6">
                    <img src={"../img/" + this.props.image_id+".jpg"}/>
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    

);