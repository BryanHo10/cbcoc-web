import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Jumbotron from "../components/jumbotron"
import Group_Tile from "../components/fellowships/fellowship-group-tile";

let groupNames=["Children","Middle/High School","College","English Young Adult","Young Families","English Adult","Cantonese Adult","Mandarin Young Adult","Mandarin Adult"];
let fellowshipJSON=JSON.parse(`{
  "fellowships":
      [
          
          {
              "target_aud":"Children",
              "name":"Blast",
              "abbrev":"BLAST",
              "description":"",
              "meetings": "Second & Third Fridays of the Month",
              "times": "7:30 PM",
              "location":"CBCOC",
              "contact":
              [
                  {
                      "name":"Samuel Leung",
                      "email":"fireelements@gmail.com"
                  }
              ],
              "audience":"Elementary School"
          },
          {
              "target_aud":"Middle/High School",
              "name":"Christian Youth Fellowship",
              "abbrev":"CYF",
              "description":"",
              "meetings": "Every Friday",
              "times": "7:30 PM",
              "location":"CBCOC",
              "contact":
              [
                  {
                      "name":"Eugene Kim",
                      "email":"eugene.s.kim1@gmail.com"
                  }
              ],
              "audience":"Junior High & High School"
          },
          {
              "target_aud":"College",
              "name":"Crosstrainers",
              "abbrev":"CT",
              "description":"",
              "meetings": "Every Friday",
              "times":"7:30 PM",
              "location":"CBCOC",
              "contact":
              [
                  {
                      "name":"Matthew Yang",
                      "email":"matthewsyang@gmail.com"
                  },
                  {
                      "name":"Donna Wong",
                      "email":"dw2107@gmail.com"
                  }
              ],
              "audience":"College"
          },
          {
              "target_aud":"English Young Adult",
              "name":"Clay",
              "abbrev":"CLAY",
              "description":"",
              "meeting":"",
              "times":"",
              "location":"",
              "contact":
              [
                  {
                      "name":"",
                      "email":""
                  }
              ],
              "audience":"English Young Adult"
          },
          {
              "target_aud":"Young Families",
              "name":"Young Family Fellowship",
              "abbrev":"YYF",
              "description":"",
              "meetings":"TBD",
              "times":"TBD",
              "location":"TBD",
              "contact":
              [
                  {
                      "name":"Anne Yip",
                      "email":"anneyip@gmail.com"
                  }
              ],
              "audience":"Families with young children"
          },
          {
              "target_aud":"English Adult",
              "name":"English Adult Fellowship",
              "abbrev":"EAF",
              "description":"",
              "meetings":"TBD",
              "times":"TBD",
              "location":"TBD",
              "contact":
              [
                  {
                      "name":"Lana Woo",
                      "email":"lanalwoo@gmail.com"
                  }
              ],
              "audience":"English Adult"
          },
          {
              "target_aud":"Cantonese Adult",
              "name":"Friends of Jesus",
              "abbrev":"FOJ",
              "description":"",
              "meetings":"Second Fridays of the month",
              "times": "7:30 PM",
              "location":"CBCOC",
              "contact":
              [
                  {
                      "name":"Samuel Kwok",
                      "email":"samkwok_91773@yahoo.com"
                  }
              ],
              "audience":"Cantonese Adult"
          },
          {
              "target_aud":"Mandarin Adult",
              "name":"Mandarin Fellowship",
              "abbrev":"N/A",
              "description":"",
              "meeting":"TBD",
              "times":"TBD",
              "location":"",
              "contact":
              [
                  {
                      "name":"",
                      "email":""
                  }
              ],
              "audience":""
          },
          {
              "target_aud":"Mandarin Young Adult",
              "name":"ZION",
              "abbrev":"ZION",
              "description":"",
              "meeting":"Every Friday",
              "times":"7:30PM",
              "location":"CBCOC",
              "contact":
              [
                  {
                      "name":"Bob Gao",
                      "email":"gaohezhu@gmail.com"
                  }
              ],
              "audience":"Mandarin Young Adult"
          }
      ]
}`).fellowships;


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
        fellowshipJSON.map((fellowship) => {
            return(
                <Group_Tile
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