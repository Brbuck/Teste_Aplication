import React from 'react';

import { Container, Layout, Button } from './styles';

function Index() {

  return (
    <Layout>
      <Container>
        <div>
          <h1>Curso online para aprender a evoluir no churrasco e se tornar um mestre cervejeiro </h1>
          <p>Você se especializará na dimensão cultural das práticas alimentares e gastronômicas, conhecendo os diferentes processos e
            irá adquirir capacidade técnica qualificada para executá-los.
          </p>
          <Button to=''>Quero saber mais</Button>
        </div>
      </Container>
    </Layout>

  )
};

export default Index;