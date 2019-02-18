
// import Leader_Card from "../components/leadership/bio-modal"
// import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"

export default class Leader_Page extends React.Component {
    render(){
        return(
            <div>
                {/* <Toolbar></Toolbar>
                <Leader_Card className="container-fluid">

                </Leader_Card> */}
                <FooterNav></FooterNav>

            </div>
        );
    }
}

// export default FooterNav;
ReactDOM.render(
    <Leader_Page/>,
    document.getElementById('leadership')
  );