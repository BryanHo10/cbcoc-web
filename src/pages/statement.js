import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Jumbotron from "../components/jumbotron"
import BaptistFaithMessage from "../components/statement/baptist"
import ReactHelmet from "../components/head"



export default ({location}) => (
  <div>
    {/* <p>Such wow. Very React.</p> */}
    <ReactHelmet
            tabTitle={"Statement of Faith | CBCOC"}
    />
    <Toolbar
      isSolid={false}
    />
    <Jumbotron
        desc=""
        image="statement/statement-cover.jpg"
        title="Statement of Faith" 
        title2="" 
    />
    <BaptistFaithMessage/>
    <FooterNav/>
  </div>
)