import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import SermonNav from "../components/sermon/sermon-nav"
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
let interval = 10;  // displays n messages per page
let index=0;        
let sermonSet=[];
let sermonData=sermonEng.reverse();
let noNewer = true;
let noOlder = false;
let direction;

function setSermonDisplay(locationState){
    
    if(locationState.search)
    {
        // Extracts URL Parameters to identify indices
        let query=locationState.search.replace(/=/g,'&');
        query=query.split('&');
        index=parseInt(query[1]);
        direction=Math.sign(parseInt(query[3])-index);

        if(direction == 0)
            direction=-1;
        if(direction == -1){

            index=parseInt(query[3]);

        }

    }
    // True/False - determing "hidden" style for navigations
    if(index == 0){
        noNewer=true;
    }
    else{
        noNewer=false;
    }
    if(index+interval >= sermonData.length){
        noOlder=true;
    }
    else{
        noOlder=false;
    }

    for(let count = 0;count<10;count++){
        let message=sermonData[index];
        if(message){
            sermonSet[index%interval]=(
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
            index++;
        }
        else{
                       
            return;
        }
        
    }
    if(direction == -1){
        index-=sermonSet.length;
    }
    return;
}


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
        <h3 id="leader-title" className="py-3">{index} - {index+(direction*interval)}</h3>

            {/* Pushing each item in the list of leaders || staff: Person object */}
            {setSermonDisplay(location)}
            {sermonSet.map((messageHTML)=>{
                return (
                    messageHTML
                );
            } )}
        <SermonNav
            currentIndex={index}
            intervalIndex={interval}
            hideOlder={noOlder}
            hideNewer={noNewer}
            
        />
        <FooterNav/>
    </div>
  )
  