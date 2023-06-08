import React from 'react';
import { HeaderStyled, Logo } from './styled/Header.styled';
import url from '../assets/logo.svg';
import Container from './styled/Container.styled';
function Header() {
  return (
    <HeaderStyled>
      <Logo src={url} alt='logo' />
    </HeaderStyled>
  );
}

export default Header;
