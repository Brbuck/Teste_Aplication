import React, { useContext, useState } from 'react';
import Switch from "react-switch";
import { ThemeContext } from 'styled-components';
import { useAuth } from '../../contexts/authContext'

import DashboardHeader from '../DashboardHeader';

import { Container, LogoIcon, Logout, Links, LoginButton, MenuIcon } from './styles';

function Header({ togleTheme }) {
    const { title } = useContext(ThemeContext)

    const [click, setClick] = useState(false)
    const handleMenu = () => {
        setClick(!click)
    }

    const { user } = useAuth()
    return (
        <Container click={click}>
            {
                user ? <DashboardHeader /> :
                    <Logout onClick={handleMenu} >
                        <MenuIcon onClick={handleMenu} />
                        <div className='menu '>
                            <Links to='/'><LogoIcon /></Links>
                            <Links to='churrasco'>Churrasco</Links>
                            <Links to='/hamburguer'>Hambúrguer</Links>
                            <Links to='mestre-cervejeiro'>Mestre Cervejeiro</Links>
                            <Links to='/cadastrar'>Cadastrar</Links>
                            <LoginButton to='/login'>Entrar</LoginButton>
                        </div>
                    </Logout>
            }
            <Switch
                onChange={togleTheme} checked={title === 'dark'}
                height={15}
                width={42}
                handleDiameter={18}
                onColor='#ff0f4d'
                offColor='#333'
                offHandleColor='#ff0f4d'

            />
        </Container>
    );
}

export default Header;