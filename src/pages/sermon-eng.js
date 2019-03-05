import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import MessageView from "../components/sermon/message-view"
import ReactHelmet from "../components/head"
import sermonEng from "../data/cbcoc_eng"
/* PROPS : 
        "id": 156,
        "date": "2018-11-18",
        "title": "A True Servant and a False Kin",
        "series": "Mark",
        "series_num": 17,
        "passage": "Mark 6:14-29",
        "speaker": "Pastor Ryan Cheung",
        "audio_link": "http://www.cbcoc.org/content/media/audio/englishworship/english_2018_11_18_cheung.mp3"
*/
  export default ({location}) => (
    <div>
      {/* <p>Such wow. Very React.</p> */}
      <ReactHelmet
            tabTitle={"Sermons | CBCOC"}
        />
      <Toolbar
        isSolid={true}
      />

      <h1 id="leader-title" className="py-3">English Service Sermons</h1>

        {/* Pushing each item in the list of leaders || staff: Person object */}
        {sermonEng.reverse().map((message)=>{
            return (
                <MessageView
                    index={message.id} 
                    title={message.title}
                    date={message.date}
                    series={message.series}
                    series_num={message.series_num}
                    passage={message.passage}
                    speaker={message.speaker}
                    audio_link={message.audio_link}
                />


            );
        } )}

      <FooterNav/>
    </div>
  )
  