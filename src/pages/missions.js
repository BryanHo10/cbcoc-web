import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Jumbotron from "../components/jumbotron"
import Group_Tile from "../components/fellowships/fellowship-group-tile";

import fellowshipData from "../data/fellowship.json"


//failed doing withPrefix from static?
let fellowshipJSON=fellowshipData.fellowships;


// need to make description field for jumbotron -- "Join in God's work among the nations"

//JSON of text and img_name

export default ()=>(
	<div>
		<Toolbar
			isSolid={false}
		/>
		<Jumbotron
			desc=""
			image="upcoming.png"
			title="MISSION TRIPS" 
			title2="" 
		/>
		<div className="row container-fluid">
		  {
			fellowshipJSON.map((fellowship) => {
				return(
					<Group_Tile
					  target_aud={fellowship.target_aud}
					  id={fellowship.target_aud.toLowerCase().replace(/ |\//g,"_")}
					  name={fellowship.name}
					  abbrev={fellowship.abbrev}
					  desc={fellowship.description}
					  meetings={fellowship.meetings}
					  times={fellowship.times}
					  loc={fellowship.location}
					  contact={fellowship.contact}
					  audience={fellowship.audience}
					/>
				);

			})
		  }
		</div>

	   
		<FooterNav/>

	</div>
);