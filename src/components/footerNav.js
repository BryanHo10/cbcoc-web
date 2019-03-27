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
                        <p  className="gotham-med">CONTACT</p>
                        412 East Broadway <br/>Anaheim, California 92805<br/><br/> 714-533-6681<br/> secretary.cbcoc.org
                </div>
            
                <div className="col-md">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md">
                        <p className="footer-head">ABOUT</p>
                        <ul className="sub-list">
                            <li><Link to="/vision">Vision</Link></li>
                            <li><Link to="/statement">Statement of Faith</Link></li>
                            <li><Link to="/leadership">Leadership</Link></li>
                        </ul>

                    </div>
                    <div className="col-md">
                        <p className="footer-head">MINISTRIES</p>
                        <ul className="sub-list">
                            <li><Link to="/fellowships">Fellowship Groups</Link></li>
                            <li><Link to="/missions">Mission Trips</Link></li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <p className="footer-head">EVENTS</p>
                        <ul className="sub-list">
                            <li><Link to="/events-upcoming">Upcoming Events</Link></li>
                            <li><Link to="/calendar">Calendar</Link></li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <p className="footer-head">SERMONS</p>
                        <ul className="sub-list">
                            <li>
                                <Link to="/sermon-eng?page=1"
                                    state={{
                                        currentPage:1
                                    }}
                                >
                                    English
                                </Link>
                            </li>
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
	    	             <img id="banner-logo" alt="" src={withPrefix("/img/logo_blue.png")}></img>
                	</Link>
                        <p id="copyright-cbcoc" className="py-4">Copyright © 2018 Chinese Baptist Church of Orange County. All rights reserved.</p>
                    </div>
                    <div className="col-md pull-right px-4">
                        <ul id="social-icons" className="text-right">
                            <li className="px-2"><a id="social-icons-b" href="1"></a></li>
                            <li className="px-2"><a id="social-icons-b" href="2"></a></li>
                            <li className="px-2"><a id="social-icons-b" href="3"></a></li>
                            <li className="px-2"><a id="social-icons-r" href="4"></a></li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>);
    }
}

export default FooterNav;
