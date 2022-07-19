import { useSearchParams } from 'react-router-dom';
import SeatchList from 'components/SeatchList/SeatchList';
import React, { useState, useEffect } from 'react';
import Server from 'server/api';
import Form from 'components/Form/Form';

const API = new Server();

export default function Search() {
  const [value, setValue] = useState('');
  const [moviesLit, setMoviesLit] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesName = searchParams.get('name') ?? '';
  const histori = window.location.search.split('=')[1];

  useEffect(() => {
    if (!value && !histori) {
      return;
    }
    if (!value) {
      API.name = histori;
      serverData();
      return;
    }

    API.name = value;

    serverData();
  }, [value]);

  function onSubmit(event) {
    event.preventDefault();
    setValue(event.target.name.value);
  }

  function onChang(name) {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  }

  async function serverData() {
    const data = await API.serverSearch();
    setMoviesLit(data.results);
  }

  return (
    <main>
      <Form submit={onSubmit} value={moviesName} onChang={onChang} />
      <SeatchList list={moviesLit} />
    </main>
  );
}
