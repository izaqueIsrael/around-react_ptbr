import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeletePostModal({ className, deleteIsOpen, setDeleteIsOpen }) {
  const handleDeleteCardClick = () => setDeleteIsOpen(!deleteIsOpen);
  const handleFadeClick = () => setDeleteIsOpen(!deleteIsOpen);
  const handleModalOnKeyDown = e => e.key === 'Escape' ? setDeleteIsOpen(false) : null;


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
    />
  );
}

export default DeletePostModal;