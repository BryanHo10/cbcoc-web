import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Jumbotron from "../components/jumbotron"
import Event_Item from "../components/events/event-item"
import Event_Navigation from "../components/events/event-nav"


export default ({location})=>(
    // location is holds props that are passed from previous link
    // 
    // Will crash if page is loaded initially without linking
    <div>
        <Toolbar
            isSolid={false}
        />
        { console.log(location)}
        <Jumbotron
            desc=""
            image="upcoming.png"
            title={location.state.eventName} 
            title2="" 
        />
        <Event_Item
            date="December 31, 2018"
            time="1:00PM"
            loc="CBCOC"
            desc="Everyone loves fromage frais edam. Emmental cottage cheese chalk and cheese squirty cheese cheesecake cottage cheese cheese strings emmental. Monterey jack cheese on toast bavarian bergkase cheese on toast fromage frais who moved my cheese feta cow. Bocconcini pecorino fondue. Fondue cream cheese jarlsberg. Caerphilly cauliflower cheese the big cheese cheese and wine gouda blue castello edam airedale. Goat croque monsieur airedale cheesy grin red leicester babybel paneer st. agur blue cheese. Edam mozzarella."
            id={1}
        />
        <Event_Navigation/>
        <FooterNav/>

    </div>
);