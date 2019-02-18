
class FooterNav extends React.Component{

    render(){
        return(
        <div className="container-fluid">
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
                            <li><a href="">Vision</a></li>
                            <li><a href="">Statement of Faith</a></li>
                            <li><a href="">Leadership</a></li>
                        </ul>

                    </div>
                    <div className="col-md">
                        <p className="footer-head"><b>MINISTRIES</b></p>
                        <ul className="sub-list">
                            <li><a href="">Fellowship Groups</a></li>
                            <li><a href="">Mission Trips</a></li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <p className="footer-head"><b>EVENTS</b></p>
                        <ul className="sub-list">
                            <li><a href="">Upcoming Events</a></li>
                            <li><a href="">Calendar</a></li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <p className="footer-head"><b>SERMONS</b></p>
                        <ul className="sub-list">
                            <li><a href="">English</a></li>
                            <li><a href="">Mandarin</a></li>
                            <li><a href="">Cantonese/English</a></li>
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
                    <a href="home.html">
	    	             <img id="banner-logo" src="./img/logo_blue.png"></img>
                	</a>
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

// export default FooterNav;
ReactDOM.render(
    <FooterNav/>,
    document.getElementById('footer-container')
  );