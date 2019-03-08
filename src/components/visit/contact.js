import React from "react"

class ContactForm extends React.Component{
    render(){
        let mapStyling={border:0, width:"70%"};
        return(
            <div className="text-center container-fluid py-3">
                <h1 className="darkblue-tag pb-4">Contact Us</h1>
                <p className="darkblue-tag pb-4">We would love to hear<br/>from you.</p>
                <div>
                    <input className="container-fluid" type="text" placeholder="Name"/>
                    <input className="container-fluid my-3" type="text" placeholder="Name"/>
                    <input className="container-fluid" type="text" placeholder="Name"/>
                    <input className="container-fluid mt-3" type="text" placeholder="Name"/>
                </div>
            </div>
        )
    }
}
export default ContactForm;