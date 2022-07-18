import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMG_URL } from 'server/api';
import {
  List,
  Elements,
  ElementsBox,
  TextBox,
  Title,
  Rating,
} from '../Main/MoviesList.styled';

export default function SeatchList({ list }) {
  const location = useLocation();
  return (
    <List>
      {list &&
        list.map(({ id, poster_path, title, release_date, vote_average }) => {
          return (
            <Elements key={id}>
              <Link to={`${id}`} state={{ from: location }}>
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
        })}
    </List>
  );
}

SeatchList.propTypes = {
  list: PropTypes.array.isRequired,
};
