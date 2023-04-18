import React, { useRef } from 'react';

function useCard() {
  const cardImage = useRef();
  const cardText = useRef();
  const deleteButton = useRef();
  const likeButton = useRef();
  console.log('abACATE')
  return { cardImage, cardText, deleteButton, likeButton }
}

export default useCard;