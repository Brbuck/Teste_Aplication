import React from 'react';
import { useAuth } from '../contexts/authContext'

function Sign() {
    const { Logout } = useAuth()

    function handleLogout() {
        Logout();
    }
    return (
        <div>
            Dashboard
            <button onClick={handleLogout}>Sair</button>
        </div>
    );
}

export default Sign;