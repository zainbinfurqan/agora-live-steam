import React, { Component } from "react";
import ChannelForm from "./components/ChannelForm";
import Call from "./components/Call";
import LiveVideStream from './live-video-streaming'

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
      </div>
    );
  }
}

export default App;
