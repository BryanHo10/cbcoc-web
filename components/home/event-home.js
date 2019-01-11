class Event_Home extends React.Component {

    render() {
      
      return (
        <div>
            <img id="event-image" src="../../img/event-test.png"></img>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Event_Home/>,
    document.getElementById('upcoming-container')
  );