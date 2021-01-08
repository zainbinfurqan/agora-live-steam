import React, { Component } from "react";
// import ChannelForm from "./components/ChannelForm";
// import Call from "./components/Call";
import LiveVideStream from './live-video-streaming'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
// import Index from './watch-party/pages/index.js'
// import Meeting from './watch-party/pages/meeting'
import WebRTCVideoToVideo from "./webRTC-video-to-video";
import Login from "./sync-video/pages/Login.js";
import WatchParty from "./sync-video/pages/WatchParty";
import io from 'socket.io-client';

// https://qr-payment-server.herokuapp.com/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: ""
    };
  }

  // componentDidMount() {
  //   const socket = io('http://localhost:3000');
  //   // socket.on("FromAPI", data => {
  //   //   setResponse(data);
  //   // });
  //   console.log(socket)
  //   socket.connect();
  // }



  selectChannel = channel => {
    this.setState({ channel });
  };

  render() {
    return (
      // <Router>
      <div className="App">
        {/* <ChannelForm selectChannel={this.selectChannel} /> */}
        {/* <Call channel={this.state.channel} /> */}
        <LiveVideStream />
        {/* <WebRTCVideoToVideo /> */}
        {/* <Switch>
            <Route path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/watchparty" component={WatchParty} />
          </Switch> */}
      </div>
      // {/* </Router> */ }

    );
  }
}

export default App;
