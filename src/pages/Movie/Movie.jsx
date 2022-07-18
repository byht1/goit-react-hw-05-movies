import { Container } from 'App.styled';
import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
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
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  console.log('🚀 ~ backLinkHref', backLinkHref);

  useEffect(() => {
    serverDate();
  }, []);

  async function serverDate() {
    API.movieId = `${id}`;
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
      {/* <Button to={backLinkHref}>Назад</Button> */}
      <Link to={backLinkHref}>назад</Link>
      <Container>
        <ContainerMovie>
          <Img
            src={poster_path ? IMG_URL + poster_path : defoltImg}
            alt={`постер к фільму ${title}`}
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
          </InfoMovie>
        </ContainerMovie>
      </Container>
    </main>
  );
}
