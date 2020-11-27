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
                rtc.client.setClientRole("audience");
            }
        }, function (err) {
            console.error("client join failed", err)
        })

    }, (err) => {
        console.error(err);
    });

}

function LiveVideoStreaming(props) {
    return (
        <div>
            <button onClick={() => joinChannel('host')}>Join Channel as Host</button>
            <button onClick={() => joinChannel('audience')}>Join Channel as Audience</button>
            <div className="local_stream"></div>
        </div>
    );
}

export default LiveVideoStreaming;