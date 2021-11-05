import React, { useContext } from 'react';
import { authContext } from '../contexts/authContext';

function Sign() {
    const {signed, handleLogin, user } = useContext(authContext)

    function handleSign() {
        handleLogin();
    }
    console.log(signed)
    console.log(user);
    return (
        <div>
            Home
            <button onClick={handleSign}>Entrar</button>
        </div>
    );
}

export default Sign;