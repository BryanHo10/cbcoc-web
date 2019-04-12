import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Jumbotron from "../components/jumbotron"
import ReactHelmet from "../components/head"
import missionData from "../data/cbcoc-mission.json"
import MissionTile from "../components/missions/mission-tile";


//failed doing withPrefix from static?
let missionJSON=missionData.missions;


// need to make description field for jumbotron -- "Join in God's work among the nations"

//JSON of text and img_name

export default ({location})=>(
	<div>
		<ReactHelmet
            tabTitle={"Mission Trips | CBCOC"}
        />
		<Toolbar
			isSolid={false}
		/>
		<Jumbotron
			desc="Join in God’s work among the nations"
			image="/missions/globe.jpg"
			title="MISSION TRIPS" 
			title2="" 
		/>
		<div className="row container-fluid pb-5">
		  {
				
			Object.keys(missionJSON).map((mission) => {
				console.log();
				return(
					<MissionTile
					  id={mission.toLowerCase().replace(/ |\//g,"_")}
					  name={mission}
					  desc={missionJSON[mission].description}
						loc={missionJSON[mission].location}
						upcoming={missionJSON[mission].upcoming}
						requirements={missionJSON[mission].requirements}
						contact={missionJSON[mission].contact}
						cost={missionJSON[mission].cost}
						participate={missionJSON[mission].participate}
					/>
				);

			})
		  }
		</div>

	   
		<FooterNav/>

	</div>
);