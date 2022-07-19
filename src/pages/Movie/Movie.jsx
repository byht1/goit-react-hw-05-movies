import { Container } from 'App.styled';
import React, { useState, useEffect, Suspense } from 'react';
import {
  useLocation,
  useParams,
  Link,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import Server, { IMG_URL } from 'server/api';
import defoltImg from '../../img/defolt-poster.jpg';
import {
  ContainerMovie,
  Img,
  InfoMovie,
  Title,
  TextDecoration,
} from './Movie.styled';

const API = new Server();

export default function Movie() {
  const { id } = useParams();
  const [movieCard, setMovieCard] = useState({});
  const [goBack, setGoBack] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  // console.log('🚀 ~ backLinkHref', backLinkHref);

  useEffect(() => {
    API.movieId = `${id}`;
    serverDate();
  }, []);

  function goBackPage() {
    if (goBack === 0) {
      navigate(-1);
      return;
    }
    navigate(-2);
  }

  // function nav(event) {
  //   history({ ...backLinkHref, search: 'name=iron' });
  //   console.log('🚀 ~ history', history);
  // }

  async function serverDate() {
    const data = await API.serverMovie();
    setMovieCard(data);
  }
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    genres,
    runtime,
    overview,
  } = movieCard;

  return (
    <main>
      {/* <Link to={backLinkHref}>назад</Link> */}
      <button onClick={goBackPage}>назад</button>
      <Container>
        <ContainerMovie>
          <Img
            src={poster_path ? IMG_URL + poster_path : defoltImg}
            alt={`постер до фільму ${title}`}
          />
          <InfoMovie>
            <Title>{title}</Title>

            <p>
              <TextDecoration>Дата виходу:</TextDecoration> {release_date}
            </p>
            <p>
              <TextDecoration>Рейтинг:</TextDecoration> {vote_average}
            </p>
            <p>
              <TextDecoration>Жанр фільму:</TextDecoration>{' '}
              {genres &&
                genres.map(
                  (x, i, arr) => `${x.name} ${arr.length - 1 === i ? '' : '/'} `
                )}
            </p>
            <p>
              <TextDecoration>Протяжність фільму:</TextDecoration> {runtime}{' '}
              хвилин
            </p>
            <p>
              <TextDecoration>Прощо фільм {title}:</TextDecoration> {overview}
            </p>
            <ul>
              <li>
                <Link to="cast" onClick={() => setGoBack(1)}>
                  Актори
                </Link>
              </li>
              <li>
                <Link to="reviews" onClick={() => setGoBack(1)}>
                  Відгуки
                </Link>
              </li>
            </ul>
          </InfoMovie>
        </ContainerMovie>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
}
