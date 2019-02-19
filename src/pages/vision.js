import React from "react"
import Toolbar from "../components/toolbar";
import FooterNav from "../components/footerNav";
import Jumbotron from "../components/jumbotron";
import Verse_Container from "../components/vision/verse";
import Vision_Container from "../components/vision/vision-container";

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
        <Vision_Container/>

        <Verse_Container/>

        <FooterNav/>


    </div>
);