import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function({menus, generalSettings}) {
  const menuItems = menus?.nodes[0]?.menuItems?.nodes || [];
  console.log(menus, generalSettings);

  const getSlug = link => link.replace(generalSettings.url, '');
  return (
    <Header>
      <TitleWrapper to="/">
        <Title>{generalSettings?.title}</Title>
        <Description>{generalSettings?.description}</Description>
      </TitleWrapper>
      <Nav>
        <List>
          {menuItems.map(item => (
            <NavItem key={item.id}>
              <Link to={getSlug(item.url)}>{item.label}</Link>
            </NavItem>
          ))}
        </List>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  background-color: #282c34;
  display: flex;
  padding: 0 25px;
  min-height: 50px;

  a {
    text-decoration: none;
  }
`;

const TitleWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  padding: 15px 0;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
`;

const Description = styled.p`
  margin: 0;
  padding: 0;
`;

const Nav = styled.nav``;

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavItem = styled.li`
  height: 100%;
  padding: 30px;
  a {
    color: white;
  }
`;
