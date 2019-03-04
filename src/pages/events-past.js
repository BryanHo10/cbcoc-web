import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Event_Preview from "../components/events/event-preview"
import Event_Navigation from "../components/events/event-nav"


export default ()=>(
    <div>
        <Toolbar
            isSolid={true}
        />

        <h1 id="leader-title" className="py-3">Past Events</h1>
        <Event_Preview
            name="Event Name"
            date="December 8-9, 2018"
            loc="CBCOC"
            img="bible"
            desc="Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte."
        />
        <EventPreview
            name="Event Name"
            date="December 8-9, 2018"
            loc="CBCOC"
            img="bible"
            desc="Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte."
        />
        <EventPreview
            name="Event Name"
            date="December 8-9, 2018"
            loc="CBCOC"
            img="bible"
            desc="Squirty cheese cheesy feet chalk and cheese. Macaroni cheese halloumi airedale cheddar boursin stinking bishop red leicester camembert de normandie. Croque monsieur who moved my cheese who moved my cheese airedale emmental cheese strings queso cheese on toast. Roquefort cow goat brie blue castello fromage frais brie brie. Dolcelatte."
        />
        <Event_Navigation/>
        <FooterNav/>

    </div>
);