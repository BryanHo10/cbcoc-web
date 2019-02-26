import React from "react"
import { withPrefix, Link } from 'gatsby'

class FooterNav extends React.Component{

    render(){
        return(
        <div id="footer-container" className="container-fluid">
            <div id="footer-nav"className="container-fluid border-bottom">
            <div className="container-fluid">
            <div className="row">
                <div id="contact-info" className="col-md">
                        <b>CONTACT</b><br/><br/>
                        412 East Broadway <br/>Anaheim, California 92805<br/><br/> 714-533-6681<br/> secretary.cbcoc.org
                </div>
            
                <div className="col-md">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md">
                        <p className="footer-head"><b>ABOUT</b></p>
                        <ul className="sub-list">
                            <li><Link to="/vision">Vision</Link></li>
                            <li><Link to="/statement">Statement of Faith</Link></li>
                            <li><Link to="/leadership">Leadership</Link></li>
                        </ul>

                    </div>
                    <div className="col-md">
                        <p className="footer-head"><b>MINISTRIES</b></p>
                        <ul className="sub-list">
                            <li><Link to="/fellowships">Fellowship Groups</Link></li>
                            <li><Link to="/mission">Mission Trips</Link></li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <p className="footer-head"><b>EVENTS</b></p>
                        <ul className="sub-list">
                            <li><Link to="/upcoming">Upcoming Events</Link></li>
                            <li><Link to="/calendar">Calendar</Link></li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <p className="footer-head"><b>SERMONS</b></p>
                        <ul className="sub-list">
                            <li><Link to="/eng-sermon">English</Link></li>
                            <li><Link to="/mand-sermon">Mandarin</Link></li>
                            <li><Link to="/cant-sermon">Cantonese/English</Link></li>
                        </ul>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md">
                    <Link to="/">
	    	             <img id="banner-logo" src={withPrefix("/img/logo_blue.png")}></img>
                	</Link>
                        <p id="copyright-cbcoc" className="py-4">Copyright © 2018 Chinese Baptist Church of Orange County. All rights reserved.</p>
                    </div>
                    <div className="col-md pull-right px-4">
                        <ul id="social-icons" className="text-right">
                            <li className="px-2"><a id="social-icons-b" href=""></a></li>
                            <li className="px-2"><a id="social-icons-b" href=""></a></li>
                            <li className="px-2"><a id="social-icons-b" href=""></a></li>
                            <li className="px-2"><a id="social-icons-r" href=""></a></li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>);
    }
}

export default FooterNav;
// ReactDOM.render(
//     <FooterNav/>,
//     document.getElementById('footer-container')
//   );