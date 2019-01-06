class FooterNav extends React.Component{

    render(){
        return(
        <div>
            <div className="container-fluid">
            <div className="row">
                <div className="col-sm">
                    CONTACT<br/><br/>
                    412 East Broadway <br/>Anaheim, California 92805<br/><br/> 714-533-6681<br/> secretary.cbcoc.org
                </div>
                <div className="col-sm">
                    <p className="foot-head">ABOUT</p>
                    <ul>
                        <li><a href="">Vision</a></li>
                        <li><a href="">Vision</a></li>
                        <li><a href="">Vision</a></li>
                    </ul>

                </div>
                <div className="col-sm">
                    <p className="foot-head">MINISTRIES</p>
                    <ul>
                        <li><a href="">Vision</a></li>
                        <li><a href="">Vision</a></li>
                        <li><a href="">Vision</a></li>
                    </ul>
                </div>
                <div className="col-sm">
                    <p className="foot-head">EVENTS</p>
                    <ul>
                        <li><a href="">Vision</a></li>
                        <li><a href="">Vision</a></li>
                        <li><a href="">Vision</a></li>
                    </ul>
                </div>
                <div className="col-sm">
                    <p className="foot-head">SERMONS</p>
                    <ul>
                        <li><a href="">Vision</a></li>
                        <li><a href="">Vision</a></li>
                        <li><a href="">Vision</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>);
    }
}

ReactDOM.render(
    <FooterNav/>,
    document.getElementById('footer-container')
  );