import React from "react"

/* PROPS : 
        "id": 156,
        "date": "2018-11-18",
        "title": "A True Servant and a False Kin",
        "series": "Mark",
        "series_num": 17,
        "passage": "Mark 6:14-29",
        "speaker": "Pastor Ryan Cheung",
        "audio_link": "http://www.cbcoc.org/content/media/audio/englishworship/english_2018_11_18_cheung.mp3"
*/

class MessageView extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		};
	}
	render(){
		let dateString = new Date(this.props.date).toDateString();
		let dateValues = dateString.split(' '); // [Wed, Jul, 28, 1993]
		let month = dateValues[1];
		let day = dateValues[2];
		let year = dateValues[3];


		return(
			<div className="container-fluid row py-3">
				<div className="col-lg-2 text-center">
					<h5 className="gotham-bold">{year}</h5>	
					<h1 className="gotham-bold">{month}<br/>{day}</h1>	
				</div> 
				<div className="col-lg">
					<h2 id="message-title" className="gotham-med">{this.props.title}</h2>
					<h5 className="gotham-book pb-4">{this.props.speaker}<br/>{this.props.passage}</h5>

					<audio controls className="container-fluid">
						<source src={this.props.audio_link} />
					</audio>	
				</div>
				<div className="col-lg-2">
					<div>
						<a download="message" href={this.props.audio_link}>
							<h6 className="fa-solid" id="attach-icon"></h6>
							<h6 id="attach-icon" className="gotham-book">  Download</h6>
						</a>
					</div>
					<div>
						<a href={this.props.audio_link}>
							<h6 className="fa-solid" id="attach-icon"></h6>
							<h6 id="attach-icon" className="gotham-book">  Link</h6>
						</a>
					</div>
				</div>  
			</div>
		);
	}
}

export default MessageView;