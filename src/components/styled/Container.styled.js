import styled from 'styled-components';

const Container = styled.div`
  width: 1000px;
  max-width: 90%;
  padding: 0 20px;
  margin: 0 auto;
  transition: transform 0.5s ease-in-out;
  animation-name: show;
  animation-duration: 0.5s;

  @keyframes show {
    from {
      transform: translateX(-200%);
    }
    to {
      transform: translateX(0);
    }
  }

  transform: ${({ animationStart }) => animationStart && 'translateX(-200%)'};
`;

export default Container;
