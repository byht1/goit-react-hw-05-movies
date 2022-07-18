import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          {movie.map(
            ({ id, poster_path, title, release_date, vote_average }) => {
              return (
                <Elements key={id}>
                  <Link to={`movies/${id}`}>
                    <img src={IMG_URL + poster_path} alt={title} />
                    <ElementsBox>
                      <Title>{title}</Title>
                      <TextBox>
                        <p>{release_date}</p>
                        <Rating rating={vote_average}>
                          {vote_average.toFixed(1)}
                        </Rating>
                      </TextBox>
                    </ElementsBox>
                  </Link>
                </Elements>
              );
            }
          )}
        </List>
      </section>
    </main>
  );
}
