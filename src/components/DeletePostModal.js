import React, { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function DeletePostModal({ className, deleteIsOpen, setDeleteIsOpen, currentCard, apiUser, setCards }) {
  const handleDeleteCardClick = () => setDeleteIsOpen(!deleteIsOpen);
  const handleFadeClick = () => setDeleteIsOpen(!deleteIsOpen);
  const handleModalOnKeyDown = e => e.key === 'Escape' ? setDeleteIsOpen(false) : null;
  const submitButtonOnClick = (e) => {
    e.preventDefault();
    apiUser.deleteCard(currentCard).catch(err => console.log(err));
    setDeleteIsOpen(!deleteIsOpen);
  }
  // useEffect(() => apiUser.getUserCards().then(arg => setCards(arg)), []);

  return (
    <PopupWithForm
      className={className}
      children={null}
      title={'Tem certeza?'}
      buttonText={'Sim'}
      popupIsOpen={deleteIsOpen}
      handleFadeClick={handleFadeClick}
      handleClosePopupClick={handleDeleteCardClick}
      handleModalOnKeyDown={handleModalOnKeyDown}
      submitButtonOnClick={submitButtonOnClick}
    />
  );
}

export default DeletePostModal;