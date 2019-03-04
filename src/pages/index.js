import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Jumbotron from "../components/jumbotron"
import VisionHome from "../components/home/vision-home"
import EventHome from "../components/home/event-home"
import ServiceHome from "../components/home/service-home"
import SermonHome from "../components/home/sermon-home"
import {Helmet} from "react-helmet";


export default () => (
  <div>
    <Helmet>
                <meta charSet="utf-8" />
                <title>CBCOC | Home</title>
    </Helmet>
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
    <VisionHome/>
    <ServiceHome/>
    <EventHome
      image="event-test.png"
      title="Upcoming Event"
      description="Come join us at this upcoming event that’s happening really soon!"
    />
    <SermonHome
      title="Latest Sermon"
      passage="Hear the most recent sermon or catch up on those from prior months"
      speaker="Jamie Kwok"
    />
    <FooterNav/>
  </div>
)