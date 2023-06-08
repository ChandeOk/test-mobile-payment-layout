import styled from 'styled-components';

export const PaymentFormStyled = styled.div`
  display: flex;
  /* border: 1px solid black; */
  width: 45%;
  height: 80vh;
  /* min-height: 80vh; */
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.31);
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
    min-height: 80vh;
  }
`;

export const PaymentFormExit = styled.div`
  width: 1rem;
  height: 1rem;
  position: absolute;
  background-color: orangered;
  right: 0;
  display: grid;
  place-content: center;
  cursor: pointer;
`;

export const PaymentFormLogo = styled.img`
  width: 30%;
  height: 30%;
  min-width: 8rem;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const FromStyled = styled.form`
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 80%;
`;

export const InputPhoneStyled = styled.input`
  max-width: 80%;
  padding: 0.5rem;
  border: 1px solid #9999;
  border-radius: 2px;
`;

export const InputAmountStyled = styled.input`
  max-width: 80%;
  padding: 0.5rem;
  border: 1px solid #9999;
  border-radius: 2px;
`;

export const FormPayButton = styled.button`
  margin-top: auto;
  width: 7rem;
  height: 2rem;
  border-radius: 2px;
  background-color: #0dbc91;
  color: #efe9e7;
  border: none;
  cursor: pointer;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  transform: scale(100%);

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(98%);
    transition: transform 0.3s ease-in-out;
  }
`;
