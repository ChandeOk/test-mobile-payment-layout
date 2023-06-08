import styled from 'styled-components';

export const CardStyled = styled.div`
  width: 20rem;
  height: 10rem;
  /* border: 1px solid black; */
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  background-color: ${({ item }) => item.background};
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.31);
  transform: scale(100%);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(98%);
    transition: transform 0.3s ease-in-out;
  }
`;

export const CardImageStyled = styled.img`
  max-height: 80%;
  max-width: 80%;
  border: 2px solid #fff;
`;
