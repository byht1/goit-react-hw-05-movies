import { useState, useEffect } from 'react';
import { useParams, useOutletContext, useLocation } from 'react-router-dom';
import Server, { IMG_URL } from 'server/api';
import { GridBox, Name, BoxName, Rol, Img } from './Cast.styled';
import anonim from '../../img/anonim.jpg';
const API = new Server();

export default function Cast() {
  const { id } = useParams();
  const location = useLocation();
  // console.log('🚀 ~ location', location.state);
  const backLinkHref = location.state ?? '/movies';
  console.log('🚀 ~ backLinkHref', backLinkHref);
  const [castList, setCastList] = useState([]);
  useEffect(() => {
    API.movieId = `${id}`;
    serverData();
  }, []);

  async function serverData() {
    const data = await API.serverActors();
    const cast = await data.cast;
    setCastList(cast);
  }

  return (
    <GridBox>
      {castList.map(({ id, profile_path, name, character }) => {
        return (
          <li key={id}>
            <Img
              src={profile_path ? IMG_URL + profile_path : anonim}
              alt={`фото актора ${name}`}
            />
            <BoxName>
              <Name>{name}</Name>
              <Rol>{character}</Rol>
            </BoxName>
          </li>
        );
      })}
    </GridBox>
  );
}
