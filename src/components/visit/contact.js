import React from "react"

class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fullName:"",
            email:"",
            subject:"",
            message:""
        }
    }
    render(){
        return(
            <div className="text-center container-fluid py-3">
                <h1 className="darkblue-tag pb-4">Contact Us</h1>
                <h4 className="darkblue-tag pb-4">We would love to hear<br/>from you.</h4>
                <div id="contact-input">
                    <form method="post" onSubmit={e => this.handleFormSubmit(e)} >
                        <input  className="container-fluid form-control form-control-lg" type="text" name="" placeholder="Name"
                                onChange={e => this.setState({ fullName: e.target.value })}
                                required
                        />
                        <input  className="container-fluid form-control form-control-lg my-3" type="text" name="email" placeholder="Email"
                                onChange={e => this.setState({ email: e.target.value })}
                                required
                        />
                        <input  className="container-fluid form-control form-control-lg" type="text" name="subject" placeholder="Subject"
                                onChange={e => this.setState({ subject: e.target.value })}
                                required
                        />
                        <textarea   className="container-fluid form-control form-control-lg mt-3" type="text" rows="6" name="message" placeholder="Message"
                                    onChange={e => this.setState({ message: e.target.value })}
                                required
                        />
                        <div className="py-5 mx-auto">
                            <button type="submit" className="btn darkbutton border px-5 py-2" 
                            >
                            Send
                            </button>
                        </div>
                    </form>
                </div>
                
            </div>
        )
    }
    handleFormSubmit(event){
        event.preventDefault();
        console.log(this.state.fullName,this.state.email,this.state.subject,this.state.message);
        return false;
    }
}
export default ContactForm;