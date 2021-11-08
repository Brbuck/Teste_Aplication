import styled from 'styled-components';

export const Container = styled.div`
     width: 100%;
     max-width: 1200px;
     height: 100vh;

     display: flex;
     flex-direction: column;
     margin: 150px auto;
     align-items: center;
  
`;

export const LogoutButton = styled.button`
    width: 200px;
    height: 40px;
    padding: 5px;

    background-color: #ff0f4d;
    color: #fff;
    font-size: 1rem;
    font-weight:bold;
    border-radius: 6px;

    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
`