import styled, {css} from 'styled-components';
import { AiOutlineBank } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 10px 30px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    background-color: ${props => props.theme.colors.background};

    div{
        a{
            margin-left: 20px;
        }
    }

    .menu{
        display: flex;
        align-items: center;

        @media screen and (max-width: 812px){
            display: none;
        }
    }

    /* .active{
         position: absolute;
            width: 100%;
            height: 100vh;
            background-color: #fff;
            flex-direction: column;
            top: 80px;
    } */
    
`;

export const iconCss = css`
    width: 30px;
    height: 30px;
    color: #ff0f4d;
  
`

export const LogoIcon = styled(AiOutlineBank)`${iconCss}`

export const MenuIcon = styled(GiHamburgerMenu)`
    ${iconCss}
    cursor: pointer;
    display: none;

    @media screen and (max-width: 812px){
        display: block;
    }

`

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