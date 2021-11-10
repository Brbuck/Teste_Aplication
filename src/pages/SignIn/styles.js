import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 650px){
        flex-direction: column;
        justify-content: flex-start;

        margin-top: 130px;
    }


    div{
        width: 380px;

        @media screen and (max-width: 650px){
            >h1{
            text-align: center;
            font-size: 1.5rem;
            }
        }
       
    }
`;


export const LoginArea = styled.div`
    width: 380px;
    height: 360px;
    padding: 20px 18px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    padding: 5px;
    font-size: 1rem;

    margin: 6px 0px;
    border: 1px solid gray;
    color: ${props => props.theme.colors.text};
    border-radius: 6px;

    &:focus{
        border: 2px solid #ff0f4d;
    }

    
`

export const LoginButton = styled.button`
    width: 100%;
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