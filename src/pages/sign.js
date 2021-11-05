import React from 'react';
import {useAuth} from '../contexts/authContext'

function Sign() {
    const {handleLogin} = useAuth()

    function handleSign() {
        handleLogin();
    }
    
    return (
        <div>
            Home
            <button onClick={handleSign}>Entrar</button>
        </div>
    );
}

export default Sign;