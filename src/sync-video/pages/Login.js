import { func } from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom'

function Login(props) {
    const history = useHistory()


    function goToWatchParty(role) {
        history.push({
            pathname: '/watchparty',
            state: { role }
        })
    }


    return (
        <div>
            <button onClick={() => goToWatchParty('host')}>join as Host</button>
            <button onClick={() => goToWatchParty('audience')}>join as Audience</button>
        </div>
    );
}

export default Login;