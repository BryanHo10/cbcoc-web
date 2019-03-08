import React from "react"

class ContactForm extends React.Component{
    render(){
        return(
            <div className="text-center container-fluid py-3">
                <h1 className="darkblue-tag pb-4">Contact Us</h1>
                <h4 className="darkblue-tag pb-4">We would love to hear<br/>from you.</h4>
                <div id="contact-input">
                    <input className="container-fluid form-control form-control-lg" type="text" name="" placeholder="Name"/>
                    <input className="container-fluid form-control form-control-lg my-3" type="text" name="email" placeholder="Email"/>
                    <input className="container-fluid form-control form-control-lg" type="text" name="subject" placeholder="Subject"/>
                    <textarea className="container-fluid form-control form-control-lg mt-3" type="text" rows="6" name="message" placeholder="Message"/>
                </div>
                <div className="py-5 mx-auto">
                    <button type="button" class="btn darkbutton border px-5 py-2">Send</button>
                </div>
            </div>
        )
    }
}
export default ContactForm;