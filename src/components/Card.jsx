import React, { useState } from 'react';
import { CardImageStyled, CardStyled } from './styled/Card.styled';

function Card({ item, handleCardClick, setOperator }) {
  const imgUrl = new URL(`../assets/${item.name}.svg`, import.meta.url);
  return (
    <CardStyled item={item} onClick={() => handleCardClick(item)}>
      <CardImageStyled src={imgUrl} />
    </CardStyled>
  );
}

export default Card;
