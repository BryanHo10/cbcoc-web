import React from "react"
import Toolbar from "../components/toolbar";
import FooterNav from "../components/footerNav";
import Jumbotron from "../components/jumbotron";
import VerseContainer from "../components/vision/verse";
import VisionContainer from "../components/vision/vision-container";

export default ()=> (
    <div>
        <Toolbar
            isSolid={false}
        />
        <Jumbotron
            desc="The mission of our church"
            image="vision.png"
            title="Vision" 
            title2="" 
        />
        <VisionContainer/>

        <VerseContainer/>

        <FooterNav/>


    </div>
);