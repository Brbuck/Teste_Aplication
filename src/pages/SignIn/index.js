import React from 'react';
import {useAuth} from '../../contexts/authContext'

import { Container, LoginArea, LoginButton, Input } from './styles';

function SignIn() {
    const {handleLogin} = useAuth()

    function handleSign() {
        handleLogin();
    }
  return (
      <Container>
          <div>
            <h1>Faça seu Login na plataforma</h1>
          </div>
          <LoginArea>
              <Input className='active' value='teste.teste@gmail.com' type="text" placeholder="E-mail" />
              <Input type="password" value='12345678' placeholder="Senha" />
              <LoginButton onClick={handleSign}>ENTRAR</LoginButton>
          </LoginArea>

      </Container>
  );
}

export default SignIn;