import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.header};
  width: 90%;
  margin: 0 auto;
  margin-bottom: 2rem;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 9px 12px -5px rgba(34, 60, 80, 0.2);
`;

export const Logo = styled.img`
  margin-left: 2rem;
  width: 62px;
  background-color: none;
`;
