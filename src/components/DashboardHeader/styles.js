import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Links = styled(Link)`
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
  padding: 5px 8px;
  margin-left: 10px;


`

export const LogoutButton = styled.button`
  width: 100%;
  height: 40px;
  padding: 5px;
  margin-top: 10px;

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

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  padding: 10px;
  z-index: 20;
  background-color: ${props => props.theme.colors.primary};

  position: absolute;
  top: 0;
  left: calc(100% - 300px);


`

export const MenuIcon = styled(GiHamburgerMenu)`
  width: 30px;
  height: 30px;
  color: #ff0f4d;

  cursor: pointer;
  margin-right: 10px;

`