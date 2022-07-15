import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  max-width: 100vw - 45px;
  gap: 15px;
`;

export const Elements = styled.li`
  position: relative;
  height: 100%;
`;

export const ElementsBox = styled.div`
  padding: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  color: #fff;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.2em;
`;

export const TextBox = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Rating = styled.p`
  border: 1px solid red;
`;
