import React from 'react';

import { Container, ChurrascoContainer, HamburguerContainer, CervejaContainer, DepoimentosContainer, DepoimentosCard, Image, Layout, Button } from './styles';

function Index() {

  return (
    <Layout>
      <Container>
        <div>
          <h1>Curso online para aprender a evoluir no churrasco, hambúrguer e se tornar um mestre cervejeiro </h1>
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
      <CervejaContainer>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CDLFre96q_XPyCxJ4fFN5ZCTuwyO5ubZqw&usqp=CAU' alt='imagem de Cerveja' />
        <div>
          <h2>Curso mestre cervejeiro</h2>
          <p>✔ Você será capacitado para conhecer sobre os processos produtivos da cerveja artesanal e harmonizações,
            desenvolvendo habilidades para debater com clareza e segurança sobre o assunto.</p>
          <p>✔ Adquirir capacidade técnica qualificada para executar e gerenciar as atividades desenvolvidas em uma cervejaria, dentre as quais:
            <br />
            - elaboração de receitas,
            <br />
            - seleção e recebimento das matérias-primas,
            <br />
            - fabricação e controles de qualidade,
            <br />
            - envase,
            <br />
            - distribuição do produto final;
          </p>
          <p>✔ Dominar todas as etapas de produção da cerveja, da moagem do malte, maceração, filtração,
            fervura, decantação e resfriamento do mosto à fermentação, maturação, filtração e envasamento do produto;
          </p>
          <Button>Increva-se</Button>
        </div>
      </CervejaContainer>
      <DepoimentosContainer>
        <h2>Veja alguns depoimentos</h2>
        <div>
          <DepoimentosCard>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc2tHTPQ9Uz-AX_ODvky9BOa7acG1MrpCHQ&usqp=CAU' alt='avatar' />
            <span>Fulano de Souza Perez</span>
            <p>"Ingressar no curso de Mestre Cervejeiro foi fundamental para minha qualificação profissional na área de produção de cervejas,
              embora já tivesse conhecimentos como Sommelier de Cervejas, não dominava os processos da produção da cerveja.
              Com o curso de Cerveja e Malte me proporcionou conhecimentos técnicos e também a segurança para assumir
              logo após a finalização do curso a produção de uma micro cervejaria, onde eu exerço essa função atualmente."</p>
          </DepoimentosCard>
          <DepoimentosCard>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DfPJ3SLExyiLXxxI1ir4-1JPSGdotHyhiw&usqp=CAU' alt='avatar' />
            <span>Fulano de Fulano Perez</span>
            <p>"Com pouco dinheiro precisava de um treinamento que me ensinasse a fazer o melhor e mais suculento Hambúrguer Artesanal,
              que não fosse caro, me ensinasse passo a passo como iniciar minha produção direto da minha casa e que não precisasse de muito dinheiro
              já que tinha muito pouco para investir."</p>
          </DepoimentosCard>
          <DepoimentosCard>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFstJkG7cFMUCC9hDurzbSPvDjT2QFODOfzg&usqp=CAU' alt='avatar' />
            <span>Fulano de Souza Fulano</span>
            <p>"Extremamente recomendado, técnica, descontração e muito aproveitamento teórico e prático. Eu queria aprender sobre churrasco,
               principalmente o estilo americano. Eu aprendi!!! o mestre, recebe seus alunos com maestria. O show vale cada centavo podem ter certeza!!!
               Prazer enorme em fazer este curso. Obrigado a todos e estão de parabéns."
              </p>
          </DepoimentosCard>
        </div>
      </DepoimentosContainer>
    </Layout>

  )
};

export default Index;