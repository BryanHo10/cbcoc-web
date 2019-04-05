import React from "react"
import Toolbar from "../components/toolbar"
import ReactHelment from "../components/head"

export default () => (
    <div className="d-flex flex-column fill-page">
        <ReactHelment
            tabTitle="Error Page | CBCOC"
        />
        <Toolbar
            isSolid={true}
        />
        <div id="error-container" className="text-center align-middle flex-fill py-5 ">
            <h1 id="error-text" className="gotham-bold">404</h1>
            <h3 id="error-subtext" className="gotham-book">The page that you're looking for doesn't exist.</h3>
        </div>
        {/* <FooterNav/> */}
    </div>

);