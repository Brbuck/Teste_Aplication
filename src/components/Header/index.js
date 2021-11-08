import React from 'react';

import { Container } from './styles';

function Header({togleTheme}) {
    return (
        <Container>
            Hello World
            <input type="checkbox" onChange={togleTheme} />
        </Container>
    );
}

export default Header;