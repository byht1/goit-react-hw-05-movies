import { Container } from 'App.styled';
import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IMG_URL, serverMovie } from 'server/api';
import defoltImg from '../../img/defolt-poster.jpg';
import {
  ContainerMovie,
  Img,
  InfoMovie,
  Title,
  TextDecoration,
  ButtonGoBack,
  Section,
  LinkA,
  ListLink,
} from './Movie.styled';
import { Loader } from './../../components/Loader/Loader';

export default function Movie() {
  const { id } = useParams();
  const [movieCard, setMovieCard] = useState({});
  const [goBack, setGoBack] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    async function serverDate() {
      const data = await serverMovie(id);
      setMovieCard(data);
    }
    serverDate();
  }, [id]);

  function goBackPage() {
    navigate(-goBack);
    setGoBack(1);
    return;
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
      <ButtonGoBack onClick={goBackPage}>
        <IoIosArrowBack size={40} /> Go Back
      </ButtonGoBack>
      <Section>
        <Container>
          <ContainerMovie>
            <Img
              src={poster_path ? IMG_URL + poster_path : defoltImg}
              alt={`постер до фільму ${title}`}
            />
            <InfoMovie>
              <div>
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
                      (x, i, arr) =>
                        `${x.name} ${arr.length - 1 === i ? '' : '/'} `
                    )}
                </p>
                <p>
                  <TextDecoration>Протяжність фільму:</TextDecoration> {runtime}{' '}
                  хвилин
                </p>
                <p>
                  <TextDecoration>Прощо фільм {title}:</TextDecoration>{' '}
                  {overview}
                </p>
              </div>
              <ListLink>
                <li>
                  <LinkA to="cast" onClick={() => setGoBack(prev => prev + 1)}>
                    Актори
                  </LinkA>
                </li>
                <li>
                  <LinkA
                    to="reviews"
                    onClick={() => setGoBack(prev => prev + 1)}
                  >
                    Відгуки
                  </LinkA>
                </li>
              </ListLink>
            </InfoMovie>
          </ContainerMovie>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Section>
    </main>
  );
}
