import React, { Component } from 'react';
import VideoPlay from './videoplayback.mp4'

class WebRTCVideoToVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.leftVideo = React.createRef();
        this.rightVideo = React.createRef();
    }

    playVideoHandle = () => {
        const stream = this.leftVideo.current.captureStream()
        this.rightVideo.current.srcObject = stream
    }
    render() {
        return (
            <div>
                <video ref={this.leftVideo} onPlay={this.playVideoHandle} crossOrigin="anonymous" id="leftVideo" playsInline controls loop muted>
                    {/* <source src="videoplayback.webm" type="video/webm" /> */}
                    <source src={VideoPlay} type="video/mp4" />
                    <p>This browser does not support the video element.</p>
                </video>

                <video ref={this.rightVideo} id="rightVideo" playsInline autoPlay></video>
            </div>
        );
    }
}

export default WebRTCVideoToVideo;