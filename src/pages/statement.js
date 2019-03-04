import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Jumbotron from "../components/jumbotron"
import BaptistFaithMessage from "../components/statement/baptist"
import {withPrefix} from "gatsby"


export default () => (
  <div>
    {/* <p>Such wow. Very React.</p> */}
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