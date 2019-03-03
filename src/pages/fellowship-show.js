import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Jumbotron from "../components/jumbotron"
import FellowshipItem from "../components/fellowships/fellowship-item"

export default ({location})=>(
    // location is holds props that are passed from previous link
    // 
    // Will crash if page is loaded initially without linking
    <div>
        <Toolbar
            isSolid={false}
        />
        { console.log(location)}
        <Jumbotron
            desc={location.state.groupAudience} 
            image="upcoming.png"
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