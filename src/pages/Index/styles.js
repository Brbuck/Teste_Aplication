import styled from 'styled-components';

export const Layout = styled.div`
    width: 100%;
    max-width: 1250px;
    margin: 0px auto;
  
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 600px;
    margin-top: 100px;
    padding: 10px;

    div{
       >h1{
           font-size: 2.5rem;
           margin-bottom:20px;
       }

       >p{
           font-size: 1.1rem;
           line-height: 25px;
           margin-bottom:20px;
       }
    }
`;

export const Button = styled.button`
    width: 200px;
    height: 60px;
    padding: 8px 14px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: 8px;

    background-color: #ff0f4d;
    color: #fff;


`