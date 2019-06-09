import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Jumbotron from "../components/jumbotron"
import ReactHelmet from "../components/head";
import missionData from "../data/cbcoc-mission"
import MissionItem from "../components/missions/mission-item";

function setLocationState(locationState){
    
    if(locationState.state)
        return;
    let query = decodeURI(locationState.search);
    query=query.replace('?id=','');

    locationState.state={};
    let missionObjects=missionData.missions;
    for(var mission in missionObjects){
        console.log(mission);
        if(mission === query){
            locationState.state["missionUpcoming"]=missionObjects[mission].upcoming;
            locationState.state["missionRequire"]=missionObjects[mission].requirements;
            locationState.state["missionLoc"]=missionObjects[mission].location;
            locationState.state["missionDesc"]=missionObjects[mission].description;
            locationState.state["missionContact"]=missionObjects[mission].contact;
            locationState.state["missionName"]=mission;
            locationState.state["missionId"]=mission.toLowerCase().replace(/ |\//g,"_");
            locationState.state["missionCost"]=missionObjects[mission].cost;
            locationState.state["missionParticipate"]=missionObjects[mission].participate;
            return;
        }
    }
    return;

}

export default ({location})=>(

    <div>
        {setLocationState(location)}
        <ReactHelmet
            tabTitle={location.state.missionName+" | CBCOC"}
        />
        <Toolbar
            isSolid={false}
        />
        <Jumbotron
            desc={location.state.missionLoc} 
            image={location.state.missionId+".png"}
            title={location.state.missionName} 
            title2=""
        />
        <MissionItem
            id={location.state.missionId}
            name={location.state.missionName}
            desc={location.state.missionDesc}
            loc={location.state.missionLoc}
            cost={location.state.missionCost}
            upcoming={location.state.missionUpcoming}
            contact={location.state.missionContact}
            requirements={location.state.missionRequire}
            participate={location.state.missionParticipate} 
        />
        
        <FooterNav/>

    </div>
);
