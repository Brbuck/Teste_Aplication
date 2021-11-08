import React from 'react';
import { useAuth } from '../../contexts/authContext'

import { Container, LogoutButton } from './styles';

function Dashboard() {
    const { Logout, user } = useAuth()

    function handleLogout() {
        Logout();
    }
    return (
        <Container>
            <span>Olá {user.name}, seja bem vindo novamente!</span>
            <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
        </Container>
    );
}

export default Dashboard;
