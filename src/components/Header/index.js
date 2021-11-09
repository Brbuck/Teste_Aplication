import React from 'react';

import { Container, LogoIcon, Links, LoginButton } from './styles';

function Header({ togleTheme }) {
    return (
        <Container>
            <Links to='/'><LogoIcon /></Links>
            <div>
                <Links to=''>Churrasco</Links>
                <Links to=''>Hambúrguer</Links>
                <Links to=''>Cerveja</Links>
            </div>
            <div>
                <Links to='/cadastrar'>Cadastrar</Links>
                <LoginButton to='/login'>Entrar</LoginButton>
            </div>
            <input type="checkbox" onChange={togleTheme} />
        </Container>
    );
}

export default Header;