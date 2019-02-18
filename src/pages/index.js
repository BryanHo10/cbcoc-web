import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Jumbotron from "../components/jumbotron"
import Vision_Home from "../components/home/vision-home"
import Event_Home from "../components/home/event-home"
import Service_Home from "../components/home/service-home"
import Sermon_Home from "../components/home/sermon-home"


export default () => (
  <div>
    {/* <p>Such wow. Very React.</p> */}
    <Toolbar
      isSolid={false}
    />
    <Jumbotron
        desc="Come for a visit this Sunday!"
        image="church.png"
        title="WELCOME" 
        title2="" 
    />
    <Vision_Home/>
    <Service_Home/>
    <Event_Home
      image="event-test.png"
      title="Upcoming Event"
      description="Come join us at this upcoming event that’s happening really soon!"
    />
    <Sermon_Home
      title="Latest Sermon"
      passage="Hear the most recent sermon or catch up on those from prior months"
      speaker="Jamie Kwok"
    />
    <FooterNav/>
  </div>
)