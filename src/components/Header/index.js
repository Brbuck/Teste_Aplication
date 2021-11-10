import React, { useContext, useState } from 'react';
import Switch from "react-switch";
import { ThemeContext } from 'styled-components';
import { useAuth } from '../../contexts/authContext'

import { Container, LogoIcon, Logout, LogIn, Links, LoginButton, MenuIcon } from './styles';

function Header({ togleTheme }) {
    const { title } = useContext(ThemeContext)

    const [click, setClick] = useState(false)
    const handleMenu = () => {
        setClick(!click)
        console.log(click)
    }

    const { user } = useAuth()
    return (
        <Container click={click}>
            <MenuIcon onClick={handleMenu} />
            {
                user ? <LogIn>
                    <Links to=''>Home</Links>
                    <Links to=''>Perfil</Links>
                    <Links to=''>Cursos</Links>
                </LogIn> :
                    <Logout onClick={handleMenu} className='menu active'>
                        <Links to='/'><LogoIcon /></Links>
                        <Links to=''>Churrasco</Links>
                        <Links to=''>Hambúrguer</Links>
                        <Links to=''>Mestre Cervejeiro</Links>
                        <Links to='/cadastrar'>Cadastrar</Links>
                        <LoginButton to='/login'>Entrar</LoginButton>
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