import React, { useRef } from 'react';
import closeButton from '../images/close.png';
import { apiUser } from '../utils/constants';

function PopupWithForm({ formType, className, children, title, buttonText, popupIsOpen, handleModalOnKeyDown, handleCloseModal, handleCurrentUser, handleSetCards }) {
  const form = useRef();

  const formSubmit = (e) => {
    e.preventDefault();
    setInApi(formType);
    apiUser.getUserInfo().then(user => handleCurrentUser(user));
    apiUser.getUserCards().then(cards => handleSetCards(cards));
    handleCloseModal();
  }

  const setInApi = (formType) => {
    if (formType === 'avatar')
      apiUser.setUserAvatar(form.current.elements.avatar.value);
    if (formType === 'profile')
      apiUser.setUserInfo({ newName: form.current.elements.name.value, newAbout: form.current.elements.status.value });
    if (formType === 'addCard')
      apiUser.updateCard({ newName: form.current.elements.title.value, newLink: form.current.elements.link.value })
  }

  return (
    <>
      <div className={className} id='add__modal' tabIndex={0} onKeyDown={handleModalOnKeyDown} >
        <button className='button popup__close' id='add__close' onClick={handleCloseModal} >
          <img className='popup__icon' alt='close' src={closeButton} />
        </button>
        <form className='form modal' ref={form}>
          <h2 className='title modal__title'>{title}</h2>
          {children}
          <button
            type='submit'
            className='button modal__button'
            id='add__button'
            onClick={formSubmit}
          >
            <span className='button__text'>{buttonText}</span>
          </button>
        </form>
      </div>
      <div className={`${popupIsOpen ? 'fade' : 'fade fade_closed'}`} onClick={handleCloseModal} />
    </>
  );
}

export default PopupWithForm;