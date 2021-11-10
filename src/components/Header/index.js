import React, { useContext } from 'react';
import Switch from "react-switch";
import { ThemeContext } from 'styled-components';

import { Container, LogoIcon, Links, LoginButton, MenuIcon } from './styles';

function Header({ togleTheme }) {
    const { title } = useContext(ThemeContext)

    return (
        <Container>
            <MenuIcon />
            <div className='menu active'>
                <Links to='/'><LogoIcon /></Links>
                <Links to=''>Churrasco</Links>
                <Links to=''>Hambúrguer</Links>
                <Links to=''>Mestre Cervejeiro</Links>
                <Links to='/cadastrar'>Cadastrar</Links>
                <LoginButton to='/login'>Entrar</LoginButton>
            </div>
            <div>

            </div>
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