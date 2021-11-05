import React, { useContext } from 'react';
import { authContext } from '../contexts/authContext';

function Sign() {
    const { Logout, user } = useContext(authContext)

    function handleLogout() {
        Logout();
    }
    
    console.log(user);
    return (
        <div>
            Dashboard
            <button onClick={handleLogout}>Sair</button>
        </div>
    );
}

export default Sign;