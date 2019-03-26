import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Jumbotron from "../components/jumbotron"
import FellowshipItem from "../components/fellowships/fellowship-item"
import ReactHelmet from "../components/head";
import fellowshipData from "../data/fellowship"

function setLocationState(locationState){
    
    if(locationState.state)
        return;
    let query = decodeURI(locationState.search);
    query=query.replace('?id=','');

    locationState.state={};

    for(var fellowshipGroup of fellowshipData.fellowships){
        if(fellowshipGroup.target_aud === query){
            locationState.state["groupMeet"]=fellowshipGroup.meetings;
            locationState.state["groupTimes"]=fellowshipGroup.times;
            locationState.state["groupLoc"]=fellowshipGroup.location;
            locationState.state["groupDesc"]=fellowshipGroup.description;
            locationState.state["groupContact"]=fellowshipGroup.contact;
            locationState.state["groupAbbrev"]=fellowshipGroup.abbrev;
            locationState.state["groupAudience"]=fellowshipGroup.audience;
            locationState.state["groupName"]=fellowshipGroup.name;
            locationState.state["groupId"]=fellowshipGroup.target_aud;
            return;
        }
    }
    return;

}

export default ({location})=>(

    <div>
        {setLocationState(location)}
        <ReactHelmet
            tabTitle={location.state.groupAbbrev+" | CBCOC"}
        />
        <Toolbar
            isSolid={false}
        />
        <Jumbotron
            desc={location.state.groupAudience} 
            image={location.state.groupName+".png"}
            title={location.state.groupName} 
            title2=""
        />
        <FellowshipItem
            date={location.state.groupMeet}
            time={location.state.groupTimes}
            loc={location.state.groupLoc}
            desc={location.state.groupDesc}
            contact={location.state.groupContact}
        />
        <FooterNav/>

    </div>
);