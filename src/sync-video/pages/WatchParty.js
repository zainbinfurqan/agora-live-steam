import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.connect();

// https://qr-payment-server.herokuapp.com/
function WatchParty(props) {
    const [userId, setUserId] = useState('')
    const [role, setRole] = useState(null)


    function setupListener() {
        let userId;
        if (props.history.location.state.role === 'host') {
            userId = 'host0010'
        }
        if (props.history.location.state.role === 'host') {
            userId = 'audience'
        }
        setRole(props.history.location.state.role)
        setUserId(userId)
        const payload = {
            userId: userId
        }
        console.log(payload)
        socket.on('connect', () => {
            console.log(socket.connected);
            console.log("connect")
            // socket.emit('room-join', payload);
        });
        console.log(props.history.location.state)
    }

    useEffect(() => {
        setupListener()
    }, [])

    function handleActionSocet() {
        socket.on('connect', () => {
            console.log("socket", socket);
            console.log("connect")
            socket.emit('room-join', {});
        });
        // socket.emit('host-video-action', { name: "host action play" });
    }

    return (
        <div>
            {role === 'host' ? <button onClick={handleActionSocet}>Host</button> : null}

        </div>
    );
}

export default WatchParty;