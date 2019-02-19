import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Jumbotron from "../components/jumbotron"
import Group_Tile from "../components/fellowships/fellowship-group-tile";

let groupNames=["Children","Middle/High School","College","English Young Adult","Young Families","English Adult","Cantonese Adult","Mandarin Young Adult","Mandarin Adult"];
export default () => (
  <div>
    {/* <p>Such wow. Very React.</p> */}
    <Toolbar
      isSolid={false}
    />
    <Jumbotron
        desc="Pursuing Jesus in community"
        image="fellowship.png"
        title="Fellowship Groups" 
        title2="" 
    />
    <div className="row container-fluid">
      {
        groupNames.map((fellowship) => {
            return(
                <Group_Tile
                  name={fellowship}
                  id={fellowship.toLowerCase().replace(/ |\//g,"_")}
                />
            );

        })
      }
    </div>
    <FooterNav/>
  </div>
);