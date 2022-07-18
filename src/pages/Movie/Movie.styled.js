import styled from '@emotion/styled';

export const ContainerMovie = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
`;

export const InfoMovie = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 26px;
`;

export const Img = styled.img`
  width: calc((1vw + 1vh) * 17);
`;

export const Title = styled.h1`
  text-align: center;
`;

export const TextDecoration = styled.span`
  font-weight: 700;
  text-decoration: underline;
`;
