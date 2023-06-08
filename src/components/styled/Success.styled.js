import styled from 'styled-components';

const Success = styled.div`
  padding: 1rem 2rem;
  min-width: max-content;
  min-height: max-content;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.31);
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;

  animation-name: fade-out;
  animation-duration: 5s;

  @keyframes fade-out {
    from {
      opacity: 100%;
    }
    to {
      opacity: 0%;
    }
  }
`;

export default Success;
