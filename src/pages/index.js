import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Jumbotron from "../components/jumbotron"

export default () => (
  <div style={{ color: `teal` }}>
    {/* <p>Such wow. Very React.</p> */}
    <Toolbar/>
    <Jumbotron
        desc="Come for a visit this Sunday!"
        image="church.png"
        title="WELCOME" 
        title2="" 
    />
    <FooterNav/>
  </div>
)