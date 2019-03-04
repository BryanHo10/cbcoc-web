import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
<<<<<<< HEAD:src/pages/events-past.js
import EventPreview from "../components/events/event-preview"
=======
import Event_Preview from "../components/events/event-preview"
import Event_Navigation from "../components/events/event-nav"
<<<<<<< HEAD:src/pages/events-past.js
>>>>>>> updated statement of faith page:src/pages/past-events.js
=======
>>>>>>> 5469894567dc9c1a2309291305e695cb7486a6e4:src/pages/past-events.js


export default ()=>(
    <div>
        <Toolbar
            isSolid={true}
        />
<<<<<<< HEAD:src/pages/events-past.js
<<<<<<< HEAD:src/pages/events-past.js

        <EventPreview
=======
=======
>>>>>>> 5469894567dc9c1a2309291305e695cb7486a6e4:src/pages/past-events.js
        <h1 id="leader-title" className="py-3">Past Events</h1>
        <Event_Preview
>>>>>>> updated statement of faith page:src/pages/past-events.js
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