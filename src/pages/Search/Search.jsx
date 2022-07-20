import { useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { serverSearch } from 'server/api';
import Form from 'components/Form/Form';
import MovieList from 'pages/MovieList/MovieList';
import { Main } from 'pages/MovieList/MovieList.styled';

export default function Search() {
  const [value, setValue] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesName = searchParams.get('name') ?? '';
  const histori = window.location.search.split('=')[1];

  useEffect(() => {
    if (!value && !histori) {
      return;
    }
    if (!value) {
      serverData(histori);
      return;
    }

    serverData(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  function onSubmit(event) {
    event.preventDefault();
    setValue(event.target.name.value);
  }

  function onChang(name) {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  }

  async function serverData(name) {
    const data = await serverSearch(name);
    setMoviesList(data.results);
  }

  return (
    <Main>
      <section>
        <Form submit={onSubmit} value={moviesName} onChang={onChang} />
        <MovieList list={moviesList} />
      </section>
    </Main>
  );
}
