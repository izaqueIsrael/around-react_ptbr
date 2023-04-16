import React from 'react';
import { useRef } from 'react';
import trashIcon from '../images/trash.svg'

function Card({ image, title, likes, handleCardClick, handleDeleteCardClick }) {
  const handleClick = () => handleCardClick(cardImage, cardText);
  const cardImage = useRef();
  const cardText = useRef();

  return (
    <div className='post'>
      <img className='post__image' alt={title} src={image} ref={cardImage} onClick={handleClick} />
      <button className='button post__delete'><img className='post__delete__image' alt='delete post' src={trashIcon} onClick={handleDeleteCardClick} /></button>
      <div className='post__container'>
        <h2 className='title post__title' ref={cardText}>{title}</h2>
        <div className='info'>
          <button className='button post__button button__image'></button>
          <p className='like'>{likes}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
