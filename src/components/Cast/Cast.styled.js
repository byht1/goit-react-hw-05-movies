import styled from '@emotion/styled';

export const GridBox = styled.ul`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(100% / 7), 1fr));
  column-gap: 15px;
  row-gap: 10px;
`;

export const Img = styled.img`
  max-height: 336px;
`;

export const BoxName = styled.div`
  padding: 10px 5px;
  text-align: center;
  background-color: black;
  color: white;
`;

export const Name = styled.p`
  font-size: 20px;
  border-bottom: 2px solid #fff;
`;

export const Rol = styled.p`
  /* text-decoration: overline; */
`;
