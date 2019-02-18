import React from "react"
import Toolbar from "../components/toolbar"

export default () => (
    <div className="d-flex flex-column fill-page">
        <Toolbar
            isSolid={true}
        />
        <div id="error-container" className="text-center align-middle flex-fill py-5">
            <h1 id="error-text">404</h1>
            <h3 id="error-subtext">The page you're looking for doesn't exist.</h3>
        </div>

    </div>

);