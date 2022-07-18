import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from 'pages/Header/AppBar';

const createAsyncComponent = path => lazy(() => import(`${path}`));

const MoviesList = createAsyncComponent('./components/Main/MoviesList');
const Search = createAsyncComponent('./components/Search/Search');
const Movie = createAsyncComponent('./pages/Movie/Movie');
const SeatchList = createAsyncComponent('./components/SeatchList/SeatchList');

export const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<AppBar />}>
        <Route index element={<MoviesList />} />
        <Route path="movies" element={<Search />}>
          {/* <Route index element={<SeatchList />} /> */}
          {/* <Route path=":id" element={<Movie />} /> */}
        </Route>
        <Route path="movies/:id" element={<Movie />} />
      </Route>
    </Routes>
  );
};
