import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 10px 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
`;
