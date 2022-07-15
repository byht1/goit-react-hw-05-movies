import { Container } from 'App.styled';
import React, { useState, useEffect } from 'react';
import Server from 'server/api';
import MovieList from './components/MovieList/MovieList';

const API = new Server();
// console.log(API.serverHitsList());
// console.log(API.serverSearch());
// console.log(API.serverMovie());
// console.log(API.serverActors());
// console.log(API.serverResponse());

export const App = () => {
  return (
    <section>
      <Container>
        <MovieList />
      </Container>
    </section>
  );
};
