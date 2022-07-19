import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from 'pages/Header/AppBar';

const createAsyncComponent = path => lazy(() => import(`${path}`));

const MoviesList = createAsyncComponent('./components/Main/MoviesList');
const Search = createAsyncComponent('./components/Search/Search');
const Movie = createAsyncComponent('./pages/Movie/Movie');
const Cast = createAsyncComponent('./components/Cast/Cast.jsx');
const Reviews = createAsyncComponent('./components/Reviews/Reviews.jsx');

export const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<AppBar />}>
        <Route index element={<MoviesList />} />
        <Route path="movies" element={<Search />} />
        <Route path="movies/:id" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
