import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const NavbarContainer = styled(AppBar)`
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
`;

const ToolbarContainer = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  @media (max-width: 37.5rem) { // 600px
    padding: 0 0.5rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width:100%;

  @media (max-width: 37.5rem) { // 600px
    gap: 0.5rem;
  }
`;

const LogoImage = styled.img`
  height: 2rem;

  @media (max-width: 37.5rem) { // 600px
    height: 1.5rem;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 30rem;
  flex: 1;
  margin: 0 1rem;

  @media (max-width: 37.5rem) { // 600px
    margin: 0 0.5rem;
  }
`;

const SearchInput = styled(InputBase)`
  color: #000;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.2);
  padding: 0 2.5rem 0 1rem; // Ajuste o padding para garantir espaço suficiente para o ícone
  border-radius: 0.5rem;
  width: 100%;
  height: 2rem;
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 37.5rem) { // 600px
    height: 1.75rem;
    padding: 0 2rem 0 0.5rem;
    font-size: 0.75rem;
  }
`;

const SearchIconStyled = styled(SearchIcon)`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #888;

  @media (max-width: 37.5rem) { // 600px
    right: 0.5rem;
  }
`;

const LogoutIcon = styled(CloseIcon)`
  color: #000;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #e74c3c;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer position="static" sx={{ backgroundColor: '#fff' }}>
      <ToolbarContainer>
        <LogoContainer>
          <LogoImage src="/vite.svg" alt="Logo" />
          <Typography variant="h6" component="a" href="/" style={{ textDecoration: 'none', color: '#000', fontSize: '1rem' }}>
            TodoApp
          </Typography>
          <SearchContainer>
            <SearchInput placeholder="Pesquisar..." />
            <SearchIconStyled />
          </SearchContainer>
        </LogoContainer>
        <IconButton edge="end" color="inherit" aria-label="logout">
          <LogoutIcon />
        </IconButton>
      </ToolbarContainer>
    </NavbarContainer>
  );
};

export default Navbar;
