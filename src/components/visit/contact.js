import React from "react"

class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fullName:"",
            email:"",
            subject:"",
            message:"",
            hasSent:false
        }
    }
    render(){
        let responseStyle={display:`${this.state.hasSent ? "block":"none"}`};
        let responseButtonStyle={display:`${!this.state.hasSent ? "block":"none"}`};
        return(
            <div className="text-center container-fluid py-3">
                <h1 className="darkblue-tag pb-4 gotham-med">Contact Us</h1>
                <h4 className="darkblue-tag pb-4 gotham-book">We would love to hear<br/>from you.</h4>
                <div id="contact-input">
                    <form method="post" onSubmit={e => this.handleFormSubmit(e)} autoComplete="off">
                        <input  className="container-fluid form-control form-control-lg" type="text" name="name" placeholder="Name"
                                value={this.state.fullName}
                                onChange={e => this.setState({ fullName: e.target.value })}
                                disabled={this.state.hasSent}
                                required
                        />
                        <input  className="container-fluid form-control form-control-lg my-3" type="text" name="email" placeholder="Email"
                                onChange={e => this.setState({ email: e.target.value })}
                                value={this.state.email}
                                disabled={this.state.hasSent}
                                required
                        />
                        <input  className="container-fluid form-control form-control-lg" type="text" name="subject" placeholder="Subject"
                                onChange={e => this.setState({ subject: e.target.value })}
                                value={this.state.subject}
                                disabled={this.state.hasSent}
                                required
                        />
                        <textarea   className="container-fluid form-control form-control-lg mt-3" type="text" rows="6" name="message" placeholder="Message"
                                    onChange={e => this.setState({ message: e.target.value })}
                                    value={this.state.message}
                                    disabled={this.state.hasSent}
                                    required
                        />
                        <div className="py-5 mx-auto" style={responseButtonStyle}>
                            <button type="submit" className="btn darkbutton px-5 py-2" 
                            >
                            Send
                            </button>
                        </div>
                        <div className="container-fluid text-center py-5" style={responseStyle}>
                            <h1 id="after-contact">Thank you for contacting us.</h1>
                        </div>
                    </form>
                </div>
                
                
            </div>
        )
    }
    handleFormSubmit(event){
        event.preventDefault();
        console.log(this.state.fullName,this.state.email,this.state.subject,this.state.message);
        this.setState({
            fullName:this.state.fullName,
            email:this.state.email,
            subject:this.state.subject,
            message:this.state.message,
            hasSent:true
        });
        return false;
    }
}
export default ContactForm;