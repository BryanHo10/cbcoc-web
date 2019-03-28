import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Jumbotron from "../components/jumbotron"
import TriFoldService from "../components/visit/tri-fold-info"
import ReactHelmet from "../components/head"
import MapView from "../components/visit/map-view";
import ParkingView from "../components/visit/parking";
import ContactForm from "../components/visit/contact";


export default ({location}) => (

  <div>
    <ReactHelmet
            tabTitle={"Visit | CBCOC"}
    />
    {/* <p>Such wow. Very React.</p> */}
    <Toolbar
      isSolid={false}
    />
    <Jumbotron
        desc="Come for a visit this Sunday!"
        image="church-view.png"
        title="WELCOME" 
        title2="" 
    />
    <TriFoldService
        mainTitle="Sunday Service Times"
        oneTitle="English Service"
        oneTime="9:15 - 10:30 AM"
        oneLoc="Fellowship Hall"
        twoTitle="Mandarin Service"
        twoTime="9:15 - 10:30 AM"
        twoLoc="Sanctuary"
        threeTitle="Bilingual Service"
        threeTime="10:45 AM - 12:00 PM"
        threeLoc="Sanctuary"
    />
    <TriFoldService
        mainTitle="Sunday School"
        oneTitle="English"
        oneTime="10:45 AM - 12:00 PM"
        oneLoc=""
        twoTitle="Mandarin"
        twoTime="10:45 AM - 12:00 PM"
        twoLoc=""
        threeTitle="Cantonese"
        threeTime="9:15 - 10:30 AM"
        threeLoc=""
    />
    <h4 className="darkblue-tag text-center container-fluid pb-4 gotham-med">Ask your pastor which Sunday School to attend.</h4>
    <TriFoldService
        mainTitle=""
        oneTitle="Preschool"
        oneTime="9:15 - 10:30 AM"
        oneLoc="10:30 AM - 12:00 PM"
        twoTitle="Children"
        twoTime="9:15 - 10:30 AM"
        twoLoc="10:30 AM - 12:00 PM"
        threeTitle="Youth"
        threeTime="10:45 AM - 12:00 PM"
        threeLoc=""
    />
    <h4 className="darkblue-tag text-center container-fluid pb-4 gotham-med">Please stay for lunch. Guests eat for free.</h4>
    <MapView/>
    <ParkingView/>
    <ContactForm/>
    <FooterNav/>
  </div>
)