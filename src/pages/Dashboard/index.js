import React from 'react';
import { useAuth } from '../../contexts/authContext'

import { Container, LogoutButton } from './styles';

function Dashboard() {
    const { Logout } = useAuth()

    function handleLogout() {
        Logout();
    }
    return (
        <Container>
            <span>Olá amigo</span>
            <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
        </Container>
    );
}

export default Dashboard;