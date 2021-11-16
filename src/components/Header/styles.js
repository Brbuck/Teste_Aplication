import styled, {css} from 'styled-components';
import { AiOutlineBank } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 10px 30px;
    white-space: nowrap;

    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    
    background-color: ${props => props.theme.colors.background};
    

    .menu{
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.5s;

        @media screen and (max-width: 812px){
            position: absolute;
            width: 100%;
            top: 70px;
            left: ${({click}) => (click ? '0px' : '-100%')};
            height: 100vh;
            flex-direction: column;

            background-color: ${props => props.theme.colors.background};
        }
        
    }
    
`;

export const Logout = styled.div`
    a{
        margin-left: 20px;

        @media screen and (max-width: 812px){
            font-size: 2rem;
            margin-bottom: 20px;
        }

        @media screen and (max-width: 650px){
            font-size: 1.3rem;
            margin-bottom: 10px;
        }
    }
`

export const iconCss = css`
    width: 30px;
    height: 30px;
    color: #ff0f4d;
  
`

export const LogoIcon = styled(AiOutlineBank)`
    ${iconCss}
    @media screen and (max-width: 812px){
        width: 50px;
        height: 50px;
    }

    @media screen and (max-width: 650px){
        width: 30px;
        height: 30px;
    }
`

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