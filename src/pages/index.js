import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Jumbotron from "../components/jumbotron"

export default () => (
  <div style={{ color: `teal` }}>
    {/* <p>Such wow. Very React.</p> */}
    <Toolbar></Toolbar>
    <Jumbotron
        image="church.png" 
        title="WELCOME" 
        title2="" 
        desc="Come for a visit this Sunday!"
    ></Jumbotron>
    <FooterNav></FooterNav>
  </div>
)