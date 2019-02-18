// import Toolbar from "./toolbar.js"
// import FooterNav from "./footerNav.js"
// import Main from "./main.js"



class Controller extends React.Component{

    render(){
        return(
        <div>
            <Header/>
            <Main/>
            <FooterNav/>
        </div>);
    }
}

export default Controller;

ReactDOM.render(
    <Controller/>,
    document.getElementById('app-container')
  );