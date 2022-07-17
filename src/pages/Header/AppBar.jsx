import { Container } from 'App.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link } from './AppBar.styled';

export default function AppBar() {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Container>
      </Header>
      <Container>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
