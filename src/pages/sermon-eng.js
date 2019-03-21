import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import SermonNav from "../components/sermon/sermon-nav"
import MessageView from "../components/sermon/message-view"
import ReactHelmet from "../components/head"
import sermonEng from "../data/cbcoc_eng_rev"
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
let interval = 15;  // displays n messages per page
let index=0;        
let sermonSet=[];
let noNewer = true;
let noOlder = false;


function setSermonDisplay(locationState){
    let direction;
    console.log(locationState);
    if(locationState.state === null){
        // Extracts URL Parameters to identify indices
        let query=locationState.search.replace(/=/g,'&');
        query=query.split('&');
        index=parseInt(query[1]);
        direction=Math.sign(parseInt(query[3])-index);


        //set Location State
        locationState.state={
            fromIndex:index,
            toIndex:parseInt(query[3]),
            direction:1
        };

        // Direction determines whether user navigates (forwards/backwards), adjusting range
        if(direction === 0)
            direction=-1;
        if(direction === -1){
            console.log(index);
            index=parseInt(query[3])-index;
            console.log(index);
        }
        locationState.state["direction"]=direction;

    }
    else{
        direction=locationState.state.direction;
        index=locationState.state.fromIndex;
    }

    // True/False - determine "hidden" style for navigations
    if(index <= 0){
        noNewer=true;
    }
    else{
        noNewer=false;
    }
    if(index+interval >= sermonEng.length){
        noOlder=true;
    }
    else{
        noOlder=false;
    }

    // Populates array of Message Components
    sermonSet=[];
    for(let count = 0;count<interval;count++){
        let message=sermonEng[index];
        if(message !== undefined){
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
            
        }
        index++;
        
        
    }
    // if(direction === -1)
    //     index-=sermonSet.length;

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
        {setSermonDisplay(location)}
        <h1 id="leader-title" className="py-3">English Service Sermons</h1>
        <h3 id="leader-title" className="py-3">Page: {index/interval}</h3>

            {/* Pushing each item in the list of leaders || staff: Person object */}
            
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
  