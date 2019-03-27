import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import JumbotronHome from "../components/home/jumbotron-home"
import VisionHome from "../components/home/vision-home"
import EventHome from "../components/home/event-home"
import ServiceHome from "../components/home/service-home"
import SermonHome from "../components/home/sermon-home"
import ReactHelmet from "../components/head"


export default ({location}) => (

  <div>
    {console.log(location)}
    <ReactHelmet
            tabTitle={"CBCOC"}
    />
    {/* <p>Such wow. Very React.</p> */}
    <Toolbar
      isSolid={false}
    />
    <JumbotronHome
        image="church.png"
    />
    <VisionHome/>
    <ServiceHome/>
    <EventHome
      image="event-test.png"
      title="Upcoming Event"
      description="Come join us at this upcoming event that’s happening really soon!"
    />
    <SermonHome/>
    <FooterNav/>
  </div>
)