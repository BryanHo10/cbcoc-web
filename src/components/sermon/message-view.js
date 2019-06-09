import React from "react"

// Displays Sermon information (Date,Passage,Speaker,Title,Series)
// Includes an in-Browser audio player that links to the mp3 file
// Buttons with options to download or direct to hyperlink

// Todo: Set up Database Management / Tool to add sermons / Tool to export sermons from DB to JSON

/* Props: 	id: (int)				index position (more recent = higher index)
			date: (string)			"Year-Month-Day"
			title: (string)			title of sermon
			series: (string)		category of sermon
			series_num: (int)		index position in category
			passage: (string)		Scripture reference (Book Chapter:Verse(s))
			speaker: (string)		name of speaker (e.g. "Pastor Ryan Cheung")
			audio_link: (string)	hyperlink to audio file

*/


class MessageView extends React.Component {
	constructor(props){
		super(props);
		
		// Might want to use this.state to hold variables 
		this.state = {
			
		};
	}
	render(){
		// Strips date of necessary information (Day,Month,Year)
		let dateString = new Date(this.props.date).toDateString();
		let dateValues = dateString.split(' '); // [Wed, Jul, 28, 1993]
		let month = dateValues[1];
		let day = dateValues[2];
		let year = dateValues[3];


		return(
			<div className="container-fluid row py-3">

				{/* Lef Column */}
				<div className="col-lg-2 text-center">
					{/* Dispaly Date */}
					<h5 className="gotham-bold">{year}</h5>	
					<h1 className="gotham-bold">{month}<br/>{day}</h1>	
				</div> 

				{/* Center Column */}
				<div className="col-lg">
					{/* Sermon Information */}
					<h2 id="message-title" className="gotham-med">{this.props.title}</h2>
					<h5 className="gotham-book pb-4">{this.props.speaker}<br/>{this.props.passage}</h5>

					{/* Browser Audio Player (check if compatible with all browsers) */}
					<audio controls className="container-fluid">
						<source src={this.props.audio_link} />
					</audio>	
				</div>

				{/* Right Column */}
				<div className="col-lg-2">

					{/* Download Button */}
					<div>
						<a download="message" href={this.props.audio_link}>
							<h6 className="fa-solid" id="attach-icon"></h6>
							<h6 id="attach-icon" className="gotham-book">  Download</h6>
						</a>
					</div>

					{/* Link-to Button */}
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