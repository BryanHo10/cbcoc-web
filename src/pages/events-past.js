import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import EventPreview from "../components/events/event-preview"
import EventNavigation from "../components/events/event-nav"
import ReactHelmet from "../components/head";


export default ({location})=>(
    <div>
        <ReactHelmet
            tabTitle={"Past Events | CBCOC"}
        />
        <Toolbar
            isSolid={true}
        />

        <h1 id="leader-title" className="py-3">Past Events</h1>
        <EventPreview
            name="Event Name"
            date="December 8-9, 2018"
            loc="CBCOC"
            img="bible"
            desc="Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte."
            id="N/A"
        />
        <EventPreview
            name="Event Name"
            date="December 8-9, 2018"
            loc="CBCOC"
            img="bible"
            desc="Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte."
            id="N/A"
        />
        <EventPreview
            name="Event Name"
            date="December 8-9, 2018"
            loc="CBCOC"
            img="bible"
            desc="Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte."
            id="N/A"
        />
        <EventNavigation/>
        <FooterNav/>

    </div>
);