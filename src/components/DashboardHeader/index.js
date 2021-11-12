import React, { useState } from 'react';
import { useAuth } from '../../contexts/authContext'

import { Container, Links, LogoutButton, Menu, MenuIcon } from './styles';

function DashboardHeader() {
    const { Logout, user } = useAuth()
    const [modal, setModal] = useState(false)

    function handleLogout() {
        Logout();
    }
    return (
        <Container>
            <MenuIcon onClick={() => { setModal(!modal) }} />
            <Links to='/login'>Home</Links>
            <Links to='/perfil'>Perfil</Links>
            <Links to=''>Cursos</Links>
            {
                modal ? <Menu>
                    <span>Olá {user.name}, seja bem vindo novamente!</span>
                    <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
                </Menu> : null
            }
        </Container>

    );
}

export default DashboardHeader;