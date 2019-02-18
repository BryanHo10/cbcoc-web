import React from "react"
import Header from "../components/header"
import FooterNav from "../components/footerNav"

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText="About Gatsby" /> 
    <p>Such wow. Very React.</p>
    <FooterNav></FooterNav>
  </div>
)