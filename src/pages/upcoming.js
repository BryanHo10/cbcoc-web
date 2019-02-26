import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Jumbotron from "../components/jumbotron"
import Event_Preview from "../components/events/event-preview"
import Event_Navigation from "../components/events/event-nav"


export default ()=>(
    <div>
        <Toolbar
            isSolid={false}
        />
        <Jumbotron
            desc=""
            image="upcoming.png"
            title="Upcoming Events" 
            title2="" 
        />

        <Event_Preview
            name="Cheesey Party"
            date="December 8-9, 2018"
            loc="CBCOC"
            id="bible"
            desc="Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte."
        />
        <Event_Preview
            name="Event Name"
            date="December 8-9, 2018"
            loc="CBCOC"
            id="bible"
            desc="Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte."
        />
        <Event_Preview
            name="Event Name"
            date="December 8-9, 2018"
            loc="CBCOC"
            id="bible"
            desc="Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte."
        />
        <Event_Navigation/>
        <FooterNav/>

    </div>
);