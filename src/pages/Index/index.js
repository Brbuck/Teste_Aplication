import React from 'react';

import { Container, ChurrascoContainer, HamburguerContainer, Image, Layout, Button } from './styles';

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
      <ChurrascoContainer>
        <div>
          <h2>Torne-se o churrasqueiro mais elogiado da galera!</h2>
          <Button>Increva-se</Button>
          <div>
            <Image src='https://feed.vtexassets.com/arquivos/ids/155998/Avancadas.png?v=636928382990200000' alt='Imagem de Churrasco'></Image>
            <Image src='https://feed.vtexassets.com/arquivos/ids/156001/Basicas.png?v=636929224868200000' alt='Imagem de Churrasco'></Image>
          </div>
        </div>
        <div>
          <div>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiq328AtOpVkyoX9ZvcdYaCZ0aYjojDOyNg&usqp=CAU' alt='Imagem de Churrasco'></Image>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXU-JrFU7ZwuplynW_hk_J2mSeJM8gLNQTg&usqp=CAU' alt='Imagem de Churrasco'></Image>
          </div>
        </div>
      </ChurrascoContainer>
      <HamburguerContainer>
        <div>
          <h2>Curso de Hambúrguer</h2>
          <p>Prepare-se para uma imersão no delicioso mundo do hambúrguer! Aprenda tudo sobre blends, hambúrgueres recheados e empanados,
            além de diversas receitas de batata rústica, onions rings, maionese caseira, tudo isso na prática.</p>
          <Button>Increva-se</Button>
        </div>
        <img src='https://feed.vtexassets.com/arquivos/ids/155876/Hamburguer1.jpg?v=636519813727430000' alt='imagem de hambúrguer' />
      </HamburguerContainer>
    </Layout>

  )
};

export default Index;