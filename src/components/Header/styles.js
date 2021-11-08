import styled, {css} from 'styled-components';
import { AiOutlineBank } from "react-icons/ai";
import {Link} from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 10px 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.colors.background};

    div{
        a{
            margin-left: 10px;
        }
    }
    
`;

export const iconCss = css`
    width: 30px;
    height: 30px;
    color: #ff0f4d;
  
`

export const LogoIcon = styled(AiOutlineBank)`${iconCss}`

export const Links = styled(Link)`
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
    padding: 5px 8px;

`

export const LoginButton = styled(Link)`
    font-size: 1rem;
    color: #fff;
    padding: 10px 20px;
    background-color: #ff0f4d;
    border-radius: 6px;
`