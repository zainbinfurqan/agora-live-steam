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

    componentDidMount() {
        // this.fetchVideo()
    }

    fetchVideo = async () => {
        console.log("fetch video")
        let response = await fetch('https://qr-payment-server.herokuapp.com/video');
        let res = await response.json()
        console.log(res)
    }

    playVideoHandle = () => {
        const stream = this.leftVideo.current.captureStream()
        console.log("stream", stream)
        console.log("this.rightVideo.current.srcObject", this.rightVideo.current.srcObject)
        this.rightVideo.current.srcObject = stream
        console.log("this.rightVideo.current.srcObject", this.rightVideo.current.srcObject)
    }
    render() {
        return (
            <div>
                <video ref={this.leftVideo} onPlay={this.playVideoHandle} crossOrigin="anonymous" id="leftVideo" playsInline controls loop muted>
                    {/* <source src="videoplayback.webm" type="video/webm" /> */}
                    {/* <source src={VideoPlay} type="video/mp4" />http://localhost:3000/video */}
                    <source src='http://localhost:3001/video' type="video/mp4" />
                    <p>This browser does not support the video element.</p>
                </video>

                <video ref={this.rightVideo} id="rightVideo" playsInline autoPlay></video>
            </div>
        );
    }
}

export default WebRTCVideoToVideo;