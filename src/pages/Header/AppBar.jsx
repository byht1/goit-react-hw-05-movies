import { Container } from 'App.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link, Nav } from './AppBar.styled';

export default function AppBar() {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </Nav>
        </Container>
      </Header>
      <Container>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
