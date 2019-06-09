import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import LeaderCard from "../components/leadership/bio-modal"
import ReactHelmet from "../components/head"
import leadershipData from "../data/leadership.json"
// Fix leadership bio popup
//  -import bootstrap.js

let staffList = leadershipData.leaders;

  export default ({location}) => (
    <div>
      {/* <p>Such wow. Very React.</p> */}
      <ReactHelmet
            tabTitle={"Leadership | CBCOC"}
        />
      <Toolbar
        isSolid={true}
      />

      <h1 id="leader-title" className="py-3 gotham-bold">Leadership</h1>

      <div id="leader-info" className="row container-fluid">

        {/* Pushing each item in the list of leaders || staff: Person object */}
        {staffList.map((staff)=>{
            return (
                <LeaderCard
                    name={staff.name}
                    title={staff.position}
                    image_id={staff.image_id}
                    desc={staff.description}
                    index={staff.id}            
                />


            );
        } )}
        
    </div>
      <FooterNav/>
    </div>
  )
  