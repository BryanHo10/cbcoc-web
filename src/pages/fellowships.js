import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Jumbotron from "../components/jumbotron"
import GroupTile from "../components/fellowships/fellowship-group-tile";
import ReactHelmet from "../components/head"
import fellowshipData from "../data/fellowship.json"

//let groupNames=["Children","Middle/High School","College","English Young Adult","Young Families","English Adult","Cantonese Adult","Mandarin Young Adult","Mandarin Adult"];

//tried doing withPrefix from static but failed
let fellowshipJSON=fellowshipData.fellowships;

export default ({location}) => (
  <div>
    {/* <p>Such wow. Very React.</p> */}
    <ReactHelmet
      tabTitle={"Fellowships | CBCOC"}
    />
    <Toolbar
      isSolid={false}
    />
    <Jumbotron
        desc="Pursuing Jesus in community"
        image="fellowship.png"
        title="Fellowship Groups" 
        title2="" 
    />
    <div className="row container-fluid pb-5">
      {
        fellowshipJSON.map((fellowship) => {
            return(
                <GroupTile
                  target_aud={fellowship.target_aud}
                  id={fellowship.target_aud.toLowerCase().replace(/ |\//g,"_")}
                  name={fellowship.name}
                  abbrev={fellowship.abbrev}
                  desc={fellowship.description}
                  meetings={fellowship.meetings}
                  times={fellowship.times}
                  loc={fellowship.location}
                  contact={fellowship.contact}
                  audience={fellowship.audience}
                />
            );

        })
      }
    </div>
    <FooterNav/>
  </div>
);
/*
            "target_aud":"Mandarin Young Adult",
            "name":"ZION",
            "abbrev":"ZION",
            "description":"",
            "meeting_times":
            [
                "Every Friday<br/>7:30 PM"
            ],
            "location":"CBCOC",
            "contact":
            [
                {
                    "name":"Bob Gao",
                    "email":"gaohezhu@gmail.com"
                }
            ],
            "audience":"Mandarin Young Adult"
*/