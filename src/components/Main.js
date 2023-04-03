import React, { useEffect, useState } from 'react';
import editButton from '../images/edit.png';
import addButton from '../images/add.png';
import Card from './Card';
import { apiUser, apiUserCard } from '../utils/constants';


function Main({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick, handleCardClick, handleDeleteCardClick }) {
  // API
  const [userData, setUserData] = useState('');
  const [userCards, setUserCards] = useState('');

  useEffect(() => {
    apiUser.getUserInfo().then(userData => setUserData(userData));
    apiUserCard.getUserInfo().then(userCards => setUserCards(userCards));
  }, []);

  return (
    <>
      <main className='main'>
        <section className='profile'>
          <div className='profile__container'>
            <div className='profile__pictures'>
              <img className='profile__image' src={userData.avatar} onClick={onEditAvatarClick} alt={userData.name} />
              <div className='cover' />
            </div>
            <div className='profile__titles'>
              <div className='profile__content'>
                <h1 className='title profile__title' >{userData.name}</h1>
                <button className='button profile__button'>
                  <img className='edit' alt='edit' src={editButton} onClick={onEditProfileClick} />
                </button>
              </div>
              <h2 className='subtitle profile__subtitle'>{userData.about}</h2>
            </div>
          </div>
          <button className='button' id='button__add' onClick={onAddPlaceClick}>
            <img className='add' alt='add' src={addButton} />
          </button>
        </section>
        <section className='posts' >
          {Array.isArray(userCards) && userCards.map((card) => (<Card
            key={card._id}
            image={card.link}
            likes={card.likes.length}
            title={card.name}
            handleCardClick={handleCardClick}
            handleDeleteCardClick={handleDeleteCardClick}
          />))}
        </section>
      </main>
    </>
  )
}

export default Main;