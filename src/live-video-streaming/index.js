import React from 'react';
import AgoraRTC from "agora-rtc-sdk";
import Call from '../components/Call';


var rtc = {
    client: null,
    joined: false,
    published: false,
    localStream: null,
    remoteStreams: [],
    params: {}
};

// Options for joining a channel
var option = {
    appID: "1463feb9d18843cbb42af2db97112081",
    channel: "zainahmed",
    uid: null,
    token: "0061463feb9d18843cbb42af2db97112081IABGRNAUqk/lxQW4rvH2X/T2FVi+AUlCBpTeyNN5dpYPWh15j/sAAAAAEACVypXNPfTBXwEAAQA19MFf"
}

function joinChannel(role) {
    // Create a client
    rtc.client = AgoraRTC.createClient({ mode: "live", codec: "h264" });

    // Initialize the client
    rtc.client.init(option.appID, function () {
        console.log("init success");

        // Join a channel
        rtc.client.join(option.token ? option.token : null, option.channel, option.uid ? +option.uid : null, function (uid) {
            console.log("join channel: " + option.channel + " success, uid: " + uid);
            rtc.params.uid = uid;
            if (role === "host") {
                rtc.client.setClientRole("host");
                // Create a local stream
                rtc.localStream = AgoraRTC.createStream({
                    streamID: rtc.params.uid,
                    audio: true,
                    video: true,
                    screen: false,
                })

                // Initialize the local stream
                rtc.localStream.init(function () {
                    console.log("init local stream success");
                    // play stream with html element id "local_stream"
                    rtc.localStream.play("local_stream");
                    // Publish the local stream
                    rtc.client.publish(rtc.localStream, function (err) {
                        console.log("publish failed");
                        console.error(err);
                    })
                }, function (err) {
                    console.error("init local stream failed ", err);
                });
            }
            if (role === "audience") {
                // rtc.client.setClientRole("audience")

                rtc.client.on("stream-added", function (evt) {
                    var remoteStream = evt.stream;
                    var id = remoteStream.getId();
                    if (id !== rtc.params.uid) {
                        rtc.client.subscribe(remoteStream, function (err) {
                            console.log("stream subscribe failed", err);
                        })
                    }
                    console.log('stream-added remote-uid: ', id);
                });

                rtc.client.on("stream-subscribed", function (evt) {
                    var remoteStream = evt.stream;
                    var id = remoteStream.getId();
                    // Add a view for the remote stream.
                    // addView(id);
                    // Play the remote stream.
                    remoteStream.play("remote_video_");
                    console.log('stream-subscribed remote-uid: ', id);
                })
            }
        }, function (err) {
            console.error("client join failed", err)
        })

    }, (err) => {
        console.error(err);
    });

}

async function injectVideo() {
    const response = await fetch(`https://api.agora.io/v1/projects/${option.appID}/cloud-player/players`);
    console.log("response=>", response)
    const res = await response.json()
    console.log("res=>", res)
}

function LiveVideoStreaming(props) {
    return (
        <div>
            <button onClick={() => joinChannel('host')}>Join Channel as Host</button>
            <button onClick={() => joinChannel('audience')}>Join Channel as Audience</button>
            <button onClick={() => injectVideo()}>Inject video</button>
            <div id="local_stream" className="local_stream" style={{ width: "400px", height: "400px" }}></div>
            <div
                // key={streamId}
                // id={`agora_remote ${streamId}`}
                id="remote_video_"
                style={{ width: "400px", height: "400px" }}
            />
        </div>
    );
}

export default LiveVideoStreaming;