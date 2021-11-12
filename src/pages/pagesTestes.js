import React from 'react';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

`;


export function HamburguerPage() {
  return (
    <Container>
      <h1>Curso de Hambúrguer </h1>
    </Container>
  );
}

export function BeerPage() {
  return (
    <Container>
      <h1>Curso de Mestre Cervejeiro </h1>
    </Container>

  );
}

export function BarbercuePage() {
  return (
    <Container>
      <h1>Curso de Churrasqueiro </h1>
    </Container>

  );
}

