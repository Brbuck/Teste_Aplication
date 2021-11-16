import React from 'react';

import { Container, Button, Form, Input, Label, Register, Title } from './styles';

function Former() {
    return (
        <Container>
            <Title>Formulário de cadastro</Title>
            <Form>
                <Register>
                    <Label>Nome completo</Label>
                    <Input type='text' />
                </Register>
                <Register>
                    <Label>email</Label>
                    <Input type='email' />
                </Register>
                <Register>
                    <Label>Senha</Label>
                    <Input type='password' />
                </Register>
                <Register>
                    <Label>Confirmar senha</Label>
                    <Input type='password' />
                </Register>
                <Button>Enviar</Button>
            </Form>
        </Container>
    )
}

export default Former;