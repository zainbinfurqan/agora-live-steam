import React, { Component } from "react";
import ChannelForm from "./components/ChannelForm";
import Call from "./components/Call";
import LiveVideStream from './live-video-streaming'

import { Route, Switch } from 'react-router-dom'
import Index from './watch-party/pages/index.js'
import Meeting from './watch-party/pages/meeting'
import { BrowserRouterHook } from './watch-party/utils/use-router'
import WebRTCVideoToVideo from "./webRTC-video-to-video";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: ""
    };
  }




  selectChannel = channel => {
    this.setState({ channel });
  };

  render() {
    return (
      <div className="App">
        {/* <ChannelForm selectChannel={this.selectChannel} /> */}
        {/* <Call channel={this.state.channel} /> */}
        <LiveVideStream />
        {/* <WebRTCVideoToVideo /> */}
        {/* <BrowserRouterHook>
          <Switch>
            <Route exact path="/meeting/:name" component={Meeting}></Route>
            <Route path="/" component={Index}></Route>
          </Switch>
        </BrowserRouterHook> */}
      </div>
    );
  }
}

export default App;
