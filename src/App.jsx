import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from 'pages/Header/AppBar';
// import Search from './components/Search/Search';

const createAsyncComponent = path => lazy(() => import(`${path}`));

// const AppBar = createAsyncComponent('./pages/Header/AppBar');
const MoviesList = createAsyncComponent('./components/Main/MoviesList');
// const Search = createAsyncComponent('./components/Search/Search');
const Search = lazy(() => import('./components/Search/Search'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<AppBar />}>
        <Route index element={<MoviesList />} />
        <Route path="movies" element={<Search />}>
          {/* <Route path="movies/:id" /> */}
        </Route>
      </Route>
    </Routes>
  );
};
