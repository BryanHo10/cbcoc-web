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
let interval = 15;  // displays n messages per page (editable)
let pageNumber=0;        
let sermonSet=[];
let noNext = true;
let noBack = false;



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
        <h1 id="leader-title" className="py-3 gotham-bold">English Service Sermons</h1>
        <h3 id="leader-title" className="py-3">Page: {pageNumber}</h3>

            {/* Pushing each item in the list of leaders || staff: Person object */}
            
            {sermonSet.map((messageHTML)=>{
                return (
                    messageHTML
                );
            } )}
        <SermonNav
            currentPage={pageNumber}
            hideBack={noBack}
            hideNext={noNext}            
        />
        <FooterNav/>
    </div>
)

  
function setSermonDisplay(locationState){

    
    if(locationState.state === null){
        // Extracts URL Parameters to identify current page ?page=#
        let query=locationState.search.split('=');
        pageNumber=parseInt(query[1]);
    

        //set Location State
        locationState.state={
            currentPage:pageNumber,
        };
    }
    else{
        pageNumber=locationState.state.currentPage;
    }

    // True/False - determine "hidden" style for navigations
    if(pageNumber*interval >= sermonEng.length || pageNumber < 1){
        noNext=true;
    }
    else{
        noNext=false;
    }
    if((pageNumber-1)*interval >= sermonEng.length || pageNumber <= 1){
        noBack=true;
    }
    else{
        noBack=false;
    }

    // Populates array of Message Components
    sermonSet=[];
    let startIndex=(pageNumber-1)*interval;
    let endIndex=pageNumber*interval-1;
    for(let messageIndex = startIndex;messageIndex<endIndex;messageIndex++){

        let message=sermonEng[messageIndex];

        if(message !== undefined){
            sermonSet[messageIndex%interval]=(
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
        
        
    }
    return;
}
