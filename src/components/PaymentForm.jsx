import React, { useEffect, useState } from 'react';
import {
  PaymentFormStyled,
  PaymentFormLogo,
  FromStyled,
  InputPhoneStyled,
  InputAmountStyled,
  PaymentFormExit,
} from './styled/PaymentForm.styled';
import logo from '../assets/MTS.svg';
import { NumericFormat, PatternFormat } from 'react-number-format';
import { FormPayButton } from './styled/PaymentForm.styled';
import Flex from './styled/Flex.styled';
function PaymentForm({
  inputPhoneNumber,
  setInputPhoneNumber,
  inputAmount,
  setInputAmount,
  operator,
  setData,
  testApiCall,
  setOperator,
  reset,
}) {
  const [isValid, setIsValid] = useState(false);
  const [success, setSuccess] = useState(true);

  const imgUrl = new URL(`../assets/${operator}.svg`, import.meta.url);

  useEffect(() => {
    const validPhoneLength = 10;
    const ValidAmount = inputAmount >= 1 && inputAmount <= 1000;
    if (ValidAmount && inputPhoneNumber.length === validPhoneLength) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [inputPhoneNumber, inputAmount]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = { amount: inputAmount, phone: inputPhoneNumber };
      const req = { method: 'POST', body: data };
      setData(req);

      const res = await testApiCall(req);
      if (!res.ok) {
        console.log('123kl12j3l1k2j3lk12j3', res.ok);
        throw new Error('NOPE');
      }
      setSuccess(true);
      reset();
    } catch (e) {
      console.log(e);
      setSuccess(false);
    }
  };

  return (
    <PaymentFormStyled action='#' method='POST' onSubmit={handleSubmit}>
      <PaymentFormExit onClick={reset}>X</PaymentFormExit>
      <PaymentFormLogo src={imgUrl} alt='logo' />
      <FromStyled>
        <PatternFormat
          format='+7 (###) ### ####'
          customInput={InputPhoneStyled}
          allowEmptyFormatting
          mask='_'
          value={inputPhoneNumber}
          onValueChange={(values) => {
            setInputPhoneNumber(values.value);
          }}
          name='phone'
        />
        <NumericFormat
          value={inputAmount}
          suffix={'₽'}
          customInput={InputAmountStyled}
          isAllowed={(values) => {
            return values.floatValue >= 1 && values.floatValue <= 1000;
          }}
          onValueChange={(values) => {
            setInputAmount(values.floatValue);
          }}
          name='amount'
        />
        {isValid ? (
          <FormPayButton type='submit'>Оплатить</FormPayButton>
        ) : (
          <Flex>
            <h3
              style={{
                maxWidth: '80%',
                fontSize: '1rem',
                fontWeight: '400',
                padding: '2rem',
                color: 'darkred',
              }}
            >
              Введите номер телефона и сумму(от 1р. до 1000р)
            </h3>
          </Flex>
        )}
        {!success && <p>Что-то не так, попробуйте снова</p>}
        {/* <InputPhoneStyled /> */}
        {/* <InputAmountStyled /> */}
      </FromStyled>
    </PaymentFormStyled>
  );
}

export default PaymentForm;
