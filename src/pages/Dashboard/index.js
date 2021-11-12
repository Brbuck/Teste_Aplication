import React from 'react';

import { Container } from './styles';

function Dashboard() {
   
    return (
        <Container>
            <h1>Home</h1>
        </Container>
    );
}

export default Dashboard;

export function Profile() {
    return (
      <Container>
        <h1>Perfil </h1>
      </Container>
  
    );
  }

  export function Course() {
    return (
      <Container>
        <h1>Cursos </h1>
      </Container>
  
    );
  }