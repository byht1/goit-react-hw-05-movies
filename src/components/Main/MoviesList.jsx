import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Server, { IMG_URL } from 'server/api';
import {
  List,
  Elements,
  ElementsBox,
  TextBox,
  Title,
  Rating,
} from './MoviesList.styled';

const API = new Server();
// console.log(API.serverHitsList());

export default function MovieList() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams;
  const location = useLocation;

  useEffect(() => {
    dataList();
  }, []);

  async function dataList() {
    const data = await API.serverHitsList();
    const hits = await data.results.map(x => {
      return Object.fromEntries(
        Object.entries(x).filter(([key]) =>
          [
            'id',
            'poster_path',
            'title',
            'genre_ids',
            'release_date',
            'vote_average',
          ].includes(key)
        )
      );
    });

    setMovie(hits);
  }

  return (
    <main>
      <section>
        <List>
          {movie.map(x => {
            return (
              <Elements key={x.id}>
                <Link to="mivies/:id">
                  <img src={IMG_URL + x.poster_path} alt={x.title} />
                  <ElementsBox>
                    <Title>{x.title}</Title>
                    <TextBox>
                      <p>{x.release_date}</p>
                      <Rating r={x.vote_average}>
                        {x.vote_average.toFixed(1)}
                      </Rating>
                    </TextBox>
                  </ElementsBox>
                </Link>
              </Elements>
            );
          })}
        </List>
      </section>
    </main>
  );
}
