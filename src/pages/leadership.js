import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Leader_Card from "../components/leadership/bio-modal"



let staffList = handleLeaderInfo();

function handleLeaderInfo(){
    //   JSON content stored in a string is temporary
      let obj = JSON.parse(`{
        "leaders":
            [
                {
                    "name":"Tony Leung",
                    "position":"Senior / Cantonese Pastor",
                    "id":0,
                    "image_id":"staff_leung",
                    "description":"Rev. Tony Leung has a Doctor of Ministry (D. Min.) degree from Truth Theological Seminary. He also has two master's degrees from Midwestern Baptist Theological Seminary in Kansas City, Missouri and a Bachelor's degree from National Taiwan University from Taipei, Taiwan. Rev. Leung is married to Ying and they live in Los Angeles with three children. He serves as pastor with four services in multiple languages, English, Cantonese, Mandarin and Spanish. Our church is focus on reaching emerging generation. Rev. Leung and his wife are passionate for the Chinese to know and experience God through prayers, worship and learning from the Bible. We also hope you find and know the Lord Jesus Christ through our church."
                },
                {
                    "name":"Ryan Cheung",
                    "position":"English Pastor",
                    "id":1,
                    "image_id":"staff_cheung",
                    "description":"As a native of the beautiful Bay Area, I was born in Palo Alto, California. The Lord was gracious to save me as I transitioned from middle school to high school. Not long after my conversion, God called me into full time ministry in the middle of high school while on a short term mission trip to Ensenada, Mexico.    After graduation I attended the University of California, San Diego. In 2007 the Lord blessed me with my better half, Natalie. We spent three post graduation years in San Diego before sensing the Lord's call to attend the Southern Baptist Theological Seminary in Louisville, Kentucky in 2010."
                },
                {
                    "name":"Paul Yang",
                    "position":"Mandarin Pastor",
                    "id":2,
                    "image_id":"",
                    "description":""
                },
                {
                    "name":"Eugene Kim",
                    "position":"Minister of Discipleship and Missions",
                    "id":3,
                    "image_id":"staff_kimeugene",
                    "description":"Eugene is our Minister of Discipleship equiping and mentoring the leaders and future leaders of the many fellowship groups at CBCOC. He is also the Minister of Missions leading the training of workers and coordinating our church's mission efforts. Eugene accepted Christ at 17. He studied Electrical Engineering at UC Irvine and worked in the nuclear power industry before being called into ministry. Eugene began his call to ministry by studying at Talbot Seminary. Before currently serving as the Minister of Discipleship and Missions, Eugene served as Youth Pastor of CBCOC for 18 years.         Married wife and best friend, Anna, in 1997. Have three daughters, three dogs and one cat. Currently studying at Golden Gate Seminary. Love to read, play basketball, hiking, biking."
                },
                {
                    "name":"Ken Tan",
                    "position":"Elder",
                    "id":4,
                    "image_id":"",
                    "description":""
                },
                {
                    "name":"Sam Kwok",
                    "position":"Elder",
                    "id":5,
                    "image_id":"",
                    "description":""
                },
                {
                    "name":"Shell Joe",
                    "position":"Elder",
                    "id":6,
                    "image_id":"",
                    "description":""
                },
                {
                    "name":"Daniel Ng",
                    "position":"Elder",
                    "id":7,
                    "image_id":"",
                    "description":""
                },
                {
                    "name":"Frank Shay",
                    "position":"Elder",
                    "id":8,
                    "image_id":"",
                    "description":""
                },
                {
                    "name":"Job Yang",
                    "position":"Elder",
                    "id":9,
                    "image_id":"",
                    "description":""
                }
    
            ]
    }`);
    return obj.leaders;
  }

  export default () => (
    <div>
      {/* <p>Such wow. Very React.</p> */}
      <Toolbar
        isSolid={true}
      />
      <div id="leader-info" className="row">

        {/* Pushing each item in the list of leaders || staff: Person object */}
        {staffList.map((staff)=>{
            return (
                <Leader_Card
                    name={staff.name}
                    title={staff.position}
                    id={staff.image_id}
                    desc={staff.description}
                    index={staff.id}            
                />


            );
        } )}
        
    </div>
      <FooterNav/>
    </div>
  )
  