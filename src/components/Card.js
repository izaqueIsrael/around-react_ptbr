import React, { useState, useRef, useContext, useEffect } from 'react';
import trashIcon from '../images/trash.svg'
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { apiUser } from '../utils/constants';

function Card({ card, image, title, likes, handleCardClick, handleDeleteCardClick, owner, like, setCards }) {
  const currentUser = useContext(CurrentUserContext);
  const handleClick = () => handleCardClick(cardImage, cardText);
  const cardImage = useRef();
  const cardText = useRef();
  const deleteButton = useRef();
  const likeButton = useRef();
  const checkOwner = () => (owner._id !== currentUser._id && deleteButton.current) && deleteButton.current.remove();
  const [isLiked, setIsLiked] = useState();
  const handleCardLike = () => {
    if (isLiked == false) {
      setIsLiked(true)
      apiUser.addLike(card._id)
    }
    else {
      setIsLiked(false)
      apiUser.removeLike(card._id)
    }
    // isLiked ? (setIsLiked(false), apiUser.removeLike(card._id)) : (setIsLiked(true), );
    console.log(isLiked)
  }

  useEffect(() => {
    setIsLiked(like.some(i => i._id === currentUser._id));
    apiUser.getUserCards().then(arg => setCards(arg));
  }, []);

  return (
    <div className='post'>
      {checkOwner()}
      <img className='post__image' alt={title} src={image} ref={cardImage} onClick={handleClick} />
      <button ref={deleteButton} className='button post__delete'><img className='post__delete__image' alt='delete post' src={trashIcon} onClick={handleDeleteCardClick} /></button>
      <div className='post__container'>
        <h2 className='title post__title' ref={cardText}>{title}</h2>
        <div className='info'>
          <button className={isLiked ? 'button post__button button__image post__button_active' : 'button post__button button__image'} ref={likeButton} onClick={handleCardLike}></button>
          <p className='like'>{likes}</p>
        </div>
      </div>
    </div >
  );
}

export default Card;
