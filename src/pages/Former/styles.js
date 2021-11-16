import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 650px;
    height: 600px;
    padding: 20px 20px;
    margin: 80px auto;
`;

export const Form = styled.form` 

`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 3px;

    font-size: 1.1rem;
    color: ${props => props.theme.colors.text};

    &:focus{
        border: 2px solid #ff0f4d;
    }

`;

export const Label = styled.label`
    font-size: 1.2rem;
    color: ${props => props.theme.colors.text};
    text-transform: capitalize;
    
`;

export const Register = styled.div`
    margin: 20px 0px;
`;

export const Title = styled.h1`
    text-align: center;
    color: #ff0f4d;
    text-transform: capitalize;
`;

export const Button = styled.button`
    width: 100%;
    height:  40px;
    background-color: #ff0f4d;
    color: #fff;

    font-size: 1.3rem;
    margin: 20px 0px;
    cursor: pointer;
`;